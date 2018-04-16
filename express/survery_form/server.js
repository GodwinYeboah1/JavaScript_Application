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

// geting form page
app.get('/',(req,res)=>{

    res.render('index')
})

app.post('/add_data', (req,res)=>{
    req.session.data = req.body

    console.log('this is the session data :',req.session.data)

    console.log("new user:", req.body)
    return res.redirect("/")
})

app.get('/result',(req, res)=>{

    content ={
        data :  req.session.data
    }

    res.render('result', {data: content})
})

app.listen(8000,()=>{
    console.log("listening on port 8000")
})