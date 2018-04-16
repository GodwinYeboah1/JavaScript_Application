
var express = require("express")
var bodyParser = require("body-parser");
var app = express()
var port = 8000;

// setting the location for static content
app.set(express.static(__dirname+ '/static'));
app.set('views', __dirname + '/views');
// setting the view engine it self to use ejs templating
app.set('view engine ', 'ejs');
//  set  the middle ware for javscript
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (request, response)=>{
    console.log("Just got to the new page");
    // dont forget  use ejs at the end 
    return response.render("main.ejs");
})
// add body parser on top
app.post('/users', (request, response)=>{
    console.log("send the form data ");
    // console log the objects
    console.log("post data: ", request.body);

    return response.redirect('/');
})

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});


app.listen(port, ()=>{
    console.log(`listing on port ${port}`)
})
