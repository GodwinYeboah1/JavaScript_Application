
var express = require('express');
var app = express()

// app.get('/', function(request,response){
//     response.send("<h1> Hello World this is godwin first express app</h1>");
//     console.log(request);
//     console.log(response);
// })

// using static in my express aplication
app.use(express.static(__dirname+ "/static"));

// app.use(express.static(__dirname + "/static"));
    console.log(__dirname); 


app.listen(8888,function(){
    console.log("running on local host 8888");

})

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


//  good hint right bellow 
//  setting express to locate my views files 
// app.set('views', __dirname + '/views');
// // set up the engine 
// app.set('view engine', 'ejs');


// route  name is here /users this fucntion has a call back that render a object
// to the user ejs file 
// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});
// })

app.get("/gworld", function (request, response){
    // hard-coded user data
    // var users_array = [
    //     {name: "Michael", email: "michael@codingdojo.com"}, 
    //     {name: "Jay", email: "jay@codingdojo.com"}, 
    //     {name: "Brendan", email: "brendan@codingdojo.com"}, 
    //     {name: "Andrew", email: "andrew@codingdojo.com"}
    // ];
    var godwin_plan = [
        {label : "1 year plan", Desc : "this is what our my plan"},
        {label : "2 year plan", Desc : "this is my plan for my two year plan"},
        {label : "3 year plan", Desc : "this is the plan for three mark"}

    ]




    response.render('gplan', {gplan: godwin_plan});
})


 // HTTP_VERB is either 'get' or 'post' etc...
// app.HTTP_VERB('URL', function (req, res){

// }); 

// root route
app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });

 // route to process new user form data:
// app.post('/users', function (req, res){
//     // code to add user to db goes here!
//     // redirect the user back to the root route. 
//     // All we do is specify the URL we want to go to:
//     res.redirect('/');
//   })
  
//   In order to be able to access POST data, 
// we need to install it with the node.js module 
// A node module! This one is called body-parser. 

// require body-parser
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
// use it!
// app.use(bodyParser.urlencoded({extended: true}));
// route to process new user form data:

app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});