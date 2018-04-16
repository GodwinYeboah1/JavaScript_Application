
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')

// connecting mongoose with mongo db which allow me to create crud 
mongoose.connect('mongodb://localhost/quotingDB');
var Quote = new mongoose.Schema({
	name : String,
	comment: String
});

mongoose.model('Quote', Quote)
var Quote = mongoose.model('Quote')
mongoose.Promise = global.Promise;

//set up middleware
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extended : true}))

app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './views'));

app.get('/', function (req, res){
    res.render('index');
})
app.get('/quotes', function(req,res){
	
	Quote.find({}, function(err, quotes){
		console.log(quotes)
	
		res.render('quotes', {quote:quotes});
	})
})

// The post essential creates the User and save it 
app.post('/quotes', function(req,res){
	console.log(req.body);
	var quote = new Quote(req.body);
	console.log(quote)
	quote.save((err)=>{
		if(err){
			console.log("An error has occured")
		}else{
			res.redirect('quotes');
		}
	})
})
app.get('/reset',(req, res)=>{
	Quote.remove({},()=>{
		console.log("just remove all chat data !!!!");
		return res.redirect("/quotes");
	})
})
app.listen(8000, function(){
    console.log("listening on port 8000")
});