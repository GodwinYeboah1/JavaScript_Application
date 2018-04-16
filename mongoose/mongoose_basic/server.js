// set up requirement
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
let port = 8000;
const app = express()
const path = require('path')
const session = require('express-session');

// Middleware
// setting up the database
mongoose.connect('mongodb://localhost/mongoose_basic');
mongoose.Promise = global.Promise;
// app.use()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/static'))
app.use(session({
    secret:'godwin',
    resave: 'false',
    saveUninitialized: true,
}))
// app.set()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// step 1 define the schema 
let UserSchema = new mongoose.Schema({
    // all my user object will have these propery
    // they will also have this validition
    name :{
        // built in validation
        type: String,
        required:[true,'NAME can not be blank ']
    },
    age : {
        type:Number,
        min:[1,'AGE has to be filled out ']
    },
    email: {
        type: String,
        required:[true, 'Email has to be filled out']
    },
    password: {
        type:String,
        required: [true,'PASSWORD has to be filled ']
    }
    // does the created at and updated at for us with this  has to be at the end
} , {timestamps:true})
// passing our UserScheme object  
// step 2 registering a model by passing the schema as the second paramater
mongoose.model('User', UserSchema)
// step 3 this will extract the model 
// allowing me to query serech the database
// using mongo method to serch in my database User.find({})
let User = mongoose.model('User');
// like User.find({})


// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views'))


// app.use()

// app.route()
// get the home page
app.get('/',(req, res)=>{
    // we want to find all the user in the database
    User.find({}, (err, users)=>{
        if (err){
            console.log(err)
        }else{
            // console.log('Users = ',users);
            res.render('index', {users: users})
        }
    })
})
// user are getting to the page
// take in a request and we hand the client a resquest
// add a new users
app.get('/users/new', (req,res)=>{
    res.render('users_new');
})
// handle post data that comes in from the form (users_new.ejs)
app.post('/users', (req,res)=>{
// two ways to create 
// using the .save() or using the .create()
// shorthand User(req.body)
let users = new User(req.body)
// req.body is where all the post data lay in
    users.save((err, users)=>{
        if (err){
            console.log("model validation error")
            console.log(err)
        }else{
            console.log('created a users!')
            console.log(users)
        }
        return res.redirect('/')
    })
})
// port bellow
// app.listen(port, () =>console.log(`listsning at ${port}...`))
app.listen(8888, ()=> console.log('this is working '))
