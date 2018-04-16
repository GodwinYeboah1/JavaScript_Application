var express = require('express');
var app = express()


// root route
app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });
  // route to process new user form data:
  app.post('/users', function (req, res){
    // code to add user to db goes here!
    // redirect the user back to the root route. 
    // All we do is specify the URL we want to go to:
    res.redirect('/');
  })


app.listen(8888,function(){
    console.log("running on local host 8888");

})
