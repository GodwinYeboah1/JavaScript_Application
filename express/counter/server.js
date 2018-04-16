// require the npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session')
let app = express()
// setup of middle ware 
// 
// if you dont set it porperly it wont work proplery
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

// this for setting up the static folder
app.use(express.static(__dirname + '/static'));

// next we are going to handle the post 
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    // to make your computer secrue
    secret:'godwinIsTheKey',
    resave: false,
    saveUninitialized: true,

}))
// now add the route
app.get('/', (req,res)=>{

    if(req.session.count){
        console.log("just add 1");
        req.session.count ++;
    }else{
        console.log("just enter the session")
        req.session.count = 1;
    }

    // json object
    content = {
        count: req.session.count
    }

// passing it in the the index files
    res.render('index', content)
})

app.get('/add_two', (req,res)=>{
    if(req.session.count){
        req.session.count +=2;
    }else{
        req.session.count = 1;
    }
     // json object
     content = {
        count: req.session.count
    }

// passing it in the the index files
    res.render('index', content)

})
app.get('/reset', (req,res)=>{

    if(req.session.count){
        req.session.count = 0;
    }
     // json object
     content = {
        count: req.session.count
    }
// passing it in the the index files
    res.render('index', content)
})
app.listen(8000, (req,res)=>{
    console.log('listing in port 8000');
})
