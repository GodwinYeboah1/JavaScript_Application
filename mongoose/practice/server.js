const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
const ejs = require('ejs')
const app = express();
const port = 9000;

// mongoose.connect('mongodb://localhost/fakeForm');
mongoose.connect('mongodb://localhost/ninjaform');

// creating database 
var UserSchema = mongoose.Schema({
    name : {
        type: String,
        required : [true ,'Cannot leave blank']
    },
    email : {
        type: String,
        required : [true ,'Cannot leave blank']
    },
    password: {
        type: String,
        required : [true ,'Cannot leave blank']
    },
} ,{timestamps:true})
// ----------------------------------

var NinjaSchema = mongoose.Schema({
    name : {
        type: String,
        required : [true ,'Cannot leave blank']
    },
    age : {
        type: Number,
        required : [true ,'Cannot leave blank']
    },
    weapon: {
        type: Array,
        default: []
    },
} ,{timestamps:true})

// set the database in a login var
mongoose.model('User',UserSchema)
var User = mongoose.model('User')





// Use native promises
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));

app.get('/ninja', (req,res)=>{
    
    return res.render('ninjaForm')
})
app.post('/ninja/add', (req,res)=>{

    // save user before finding him
    var ninja = new Ninja(req.body)

    console.log("new : ", ninja);
   
    ninja.save();

})





// bellow are the login form routes  above are the ninja 
app.get('/', (req, res)=>{
    console.log('Im at home page')
    res.render('index')
})
app.get('/result', (req, res)=>{
    console.log('Im at result page')

    // users = User.find({}, function(err, users){
	// 	console.log("here i am" , users);
	// 	res.render("resultPage", {'users': users})
	// })

    //  Model name to do query 
    User.find({}, (err, users)=>{
        if(err){
            console.log(err)
        }else{
            console.log("users:", users)
        }
        res.render('resultPage',{'users': users})
    })
  
})

app.post('/add_user', (req,res)=>{
    console.log('Im at the create phase ', req.body)
    
    var user = new User({name: req.body.name, email: req.body.email, password : req.body.password})

    user.save(function(err){
        if(err){
            console.log(err)
        }else{
            console.log('completely save')
        }
        res.redirect('/result')
    });
})
app.get('/user/:id', (req,res)=>{

   
    User.findOne({_id: req.params._id, function(err, user){
        if(err){console.log(err)}
        else{
            console.log("found Id ",user)
            return res.render('show', {user: user})
        }
    }})
})
app.get('/user/show', (req,res)=>{
    return res.render('show')
})

app.listen(port,()=>
console.log('listening on port 9000'))