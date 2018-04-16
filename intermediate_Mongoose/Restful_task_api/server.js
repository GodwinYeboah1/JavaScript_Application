
// imports 
 
const express = require('express')
const session = require('express-session')
const bp = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 8000

// middle ware
app.use(bp.json());

app.use(session({
    secret: "godwin",
    resave: false,
    saveUninitialized: true
}))

// models 
// new Schema({})
// var Person = new Schema({
//   title   : { type: String, required: true }
// , age     : { type: Number, min: 5, max: 20 }
// , meta    : {
//       likes : [String]
//     , birth : { type: Date, default: Date.now }
//   }
// });

let TaskSchema = new mongoose.Schema({
  title : String,
  description : { type: String,  default: " "},
  completed : { type: Boolean,  default: false},
},  {stampstime: true})
mongoose.model("Task",TaskSchema)
var Task = mongoose.model("Task")

console.log("New Task: ", Task)
// let  TaskSchema = new mongoose.Schema({
//     title : String,
//     description : { type: String,  default: " "},
//     completed : { type: Boolean,  default: false},
// }, {stampstime: true})
// define 
// mongoose.model('Task',TaskSchema);

app.get('/tasks', (req, res)=>{
    console.log("in the index method." )
    Task.find({}, (err, tasks) => {
      if(err){
        return res.json(err);
      }
      return res.json(tasks);
    })})

  app.get('/tasks/:id',(req, res)=>{
    Task.findById(req.params.id, (err, task) => {
      if(err){
        console.log(" what is task printing out: ", Task)
        return res.json({error: '404 - Task not found' });
      }
      return res.json(task);
    })})

  app.post('/tasks',(req, res)=>{
    Task.create(req.body, (err, task) => {
      if(err){
        return res.json(err);
      }
      return res.json(task);
    })})

  app.put('/tasks/:id',(req, res)=>{
    Task.findByIdAndUpdate(req.params.id, { $set : req.body }, { runValidators: true, new: true }, (err, task) => {
      if(err){
        return res.json(err);
      }
      return res.json(task);
    })})


  app.delete('/tasks/:id',(req,res)=>{
    console.log("In the destroy method.");
    Task.findByIdAndRemove(req.params.id, (err, task) => {
      if(err){
        return res.json(err);
      }
      return res.json({
        'success': 'successfully deleted task'
      });
    })
  })


app.listen(port, (err)=>{
    if(err){ console.log('error') }
    console.log(`listening on port ${port}`)
})
