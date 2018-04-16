
const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const port = 8000;
var path = require('path');
 
mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

// set up the middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(__dirname + './static'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(session({
    secret: 'learning',
    resave: false,
    saveUninitialized: true
}));
var mongooseSchema = mongoose.Schema({
    name :{
        type: String,
        required: [true, "can not leave blank "]
    } ,
    age :{
        type: Number,
        required: [true, "can not leave blank "]
    } ,
   

}, {timestamp : true})
mongoose.model("Mongoose",mongooseSchema )
var Mongoose = mongoose.model('Mongoose')

// form page is at index
app.get('/mongoose/new', (req,res)=>{
    res.render('index');
});

// grab user from the form data 
// save the form data in mongodb
app.post("/mongooses", (req,res)=>{
    console.log(req.body)
    let mongoose = new Mongoose(req.body)
    mongoose.save((err,mongoose)=>{
    if (err){
        console.log("error has a occuired ");
    }else{
        console.log("save completed:", mongoose)
    }
    res.redirect('/mongoose/new');
});
   
});
app.get('/',(req,res)=>{
    Mongoose.find({},(err,mongooses)=>{
        if(err){
            console.log('err')
        }else{
            console.log("Displaying all mongoose:", mongooses)
        }
        res.render('displayAll',{Mongoose:mongooses} )
    })
})

app.get('/mongooses/:id',(req, res)=>{

    Mongoose.findById({_id:req.params.id},(err,mongooses)=>{
        if(err){
            console.log("error")
        }else{
            console.log(mongooses)
        return res.render('show', {Mongoose:mongooses})
        }

    })
})

app.post('/mongooses/:id',(req, res)=>{

    // passing three para in req ID, body , err or result 
    Mongoose.update({_id:req.params.id,}, req.body, (err, result)=>{
        if(err){
            console.log("error",err)

        }else{
            console.log("result ",result)
            res.redirect('/');
        }
    })    
})

app.post('/mongooses/destroy/:id',(req, res)=>{

    // passing three para in req ID, body , err or result 
    Mongoose.remove({_id:req.params.id,},(err, result)=>{
        if(err){
            console.log("error",err)
        }else{
            console.log("result ",result)
            res.redirect('/');
        }
    })    
})

app.listen(port, function(){
    console.log("listening on port 8000")
});