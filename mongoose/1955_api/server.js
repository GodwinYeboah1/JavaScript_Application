const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// receieve jason data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect('mongodb://localhost/1955_api');
var UserSchema = new mongoose.Schema({
	name : String,
});
var User = mongoose.model('User', UserSchema)

app.get("/", (req,res)=>{
    // display all user in json 
    User.find({})
    .then((users)=>{
        res.json(users)
    })
    // throw error 
    .catch((err)=>{
        throw err
    })

})

app.get('/new/:name', (req, res)=>{

    console.log("Creating new user", req.params.name)
    User.create(req.params)

    // call back which redirect after passing the data
    .then(function(User){
        console.log("in the second call back .then")
        res.redirect('/')
    })
    // errors
    .catch(function(err){
        console.log(err);
    })

})
// remove user 
app.get("/remove/:name",(req,res)=>{
    User.remove(req.params, (err,users)=>{

        if(err){
            console.log("error message ", err)
        }else{
            res.redirect('/')
        }
    })

})

// displaying a single user
app.get('/:name',(req,res)=>{
    // step one find user
    User.findOne(req.params)
    // second call back to render the json data on the page
    .then(function(user){
        res.json(user)
    })
    // throw  in erorrs
    .catch(function(err) {
        if(err){
            console.log("error")
            res.redirect("/")
        }
    })
})
// routes
app.listen(port, function(){
    console.log(`listening on ${port}`)
})