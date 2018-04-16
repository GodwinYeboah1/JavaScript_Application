const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const port = 8000;
 
mongoose.connect('mongodb://localhost/crud_example');
mongoose.Promise = global.Promise;

// set up the middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/crud_example/static'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(session({
    secret: 'learning',
    resave: false,
    saveUninitialized: true
}))

// User tables 
let UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    // dont forget the common it a collect of name pair value

    // Post key
    post :[{
        type : mongoose.Schema.ObjectId,
        ref: 'Post'
    }],
    comments :[{
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
    }]

})
// set my table in the database
// use the mogoose.model() 
mongoose.model('User',UserSchema);
// set the user value to User
const User =  mongoose.model('User');

// Post tables 
let PostSchema = new mongoose.Schema({
    post : {
        type: String,
        required: [true, 'post cannot be blank']
    },
    
    // special key
    user: {
        // allow to get the user Id which is created instanly when created 
        type: mongoose.Schema.Types.ObjectId,
        // special key that allow us to nake associations
        //  ref keyword
        ref: 'User'
    } , 
    // once in array it would be consider as many
    comments :[{
        type: mongoose.Schema.ObjectId,
        ref:'comment'
    }]

})
mongoose.model("Post",PostSchema);
const Post = mongoose.model("Post");

let CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'comment Cannot be blank']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    post: {
        type: mongoose.Schema.ObjectId,
        ref: 'Post'
    }
})
mongoose.model('Comment',CommentSchema);
const Comment = mongoose.model('Comment')


app.get('/', (req,res)=>{
    return res.render('login');
})

// route that display all of of user
app.post('/login', (req,res)=>{
    // query database
    console.log(req.body);

    User.findOne({ name : req.body.name}, (err,users)=>{
       if(err){
           console.log('this is a error');
       }
        if(!user) {
            User.create(req.body, (err,user)=>{
                if(err){
                    console.log(err)
                    return res.redirect('/')
                }else{
                    console.log('new user:',user)
                    req.session.user_id = user._id;
                    return res.redirect('/dashborad')
                }    
           })
        }else{
            console.log("found user", user)
            req.session.user_id = user._id;
            console.log('redirect back to the home page',user);
            return res.redirect('/dashborad')

        }
    })
   
})


// listen can take two input
app.listen(port, ()=>{
    console.log("listening at port 8000")
});