var express = require('express')
var ejs = require('ejs')
var app = express()
var session = require('express-session')

app.use(session({
    secret: "godwin",
    resave: false,
    saveUninitialized: true
}))


// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// path to the static folder
app.use(express.static(__dirname + '/static'))

app.get('/', function(req,res){

    res.render('main')
})

// static folder here
app.get('/main',(req,res)=>{

    var puser = [
        {name: "ggodwin", email: 'godwin@gmail.com'},
        {name: "gprince", email: 'prince@gmail.com'},
        {name: "grobber", email: 'rpobber@gmail.com'},
        {name: "gmike", email: 'mike@gmail.com'},
    ]
    // pass the data in the index page
    res.render('index',{user: puser})
})


// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)

    session['form_data']= req.body
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/main')
});

// getting specific users id
app.get("/users/:id =1", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

// success PAGE
app.get('/sucess', (req,res)=>{

    content ={
        data: session['form_data']
    }


    res.render('success', content)
})



app.listen(8000,()=>{
    console.log("listening on port 8000")
})