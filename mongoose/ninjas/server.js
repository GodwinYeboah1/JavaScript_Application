const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
const ejs = require('ejs')
const app = express();
const port = 8000;
// Require path
var path = require('path');

mongoose.connect('mongodb://localhost/ninjaform');

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

mongoose.model('Ninja',NinjaSchema)
var Ninja = mongoose.model('Ninja')


// Use native promises
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req,res)=>{
    var ninjas = Ninja.find({}, (err,ninjas)=>{

        if(err){
            console.log(err)
        }else{
            console.log(ninjas)
        }
        console.log('i am in the index')
        return res.render('index', {Ninjas: ninjas})
    }
   
)})

app.post('/addNinja', (req,res)=>{
    // save user before finding him
    var ninja = new Ninja(req.body)
    console.log('i am in the ninja save me')
    ninja.save((err,ninjas)=>{
        if(err){
            console.log('err message')
        }else {
            console.log('ninja save:',ninjas)
        }
        res.redirect('/')
    });
})

// ninja.find({}, (err,ninjas)=>{
//     if(err){
//         console.log('err')
//     }else{
//         console.log('ninja save:',ninjas)
//     }
//     res.redirect('/')
// })

app.listen(port,()=>
console.log('listening on port 8000'))