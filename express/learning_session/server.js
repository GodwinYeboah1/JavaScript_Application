

let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

// start our app
let app = express();

// set up the middleware
// setuping the views 
// views
app.set('view engine','ejs');
app.set('views',__dirname + "/views");

// static content
app.use(express.static(__dirname + '/static'));

//  tell my express application to use  form data 
app.use(bodyParser.urlencoded({extended: true}));

// set session
app.use(session({
    secret: 'godwinisthepassword',
    resave: false,
    saveUninitialized: true,
}))

//next step we add the route
// routes
// app.get('/', (req, res)=>{
//     req.session.user = 'cody'
//     res.send('setting the User to cody');

// })
// talks to the view to render the html page
app.get('/',(req,res)=>{
   return res.render('index');
})

app.post('/login',(req,res)=>{
    // take the data from the form
    // save it into the session 
    console.log(req.body);
    req.session.user = req.body.name   
    return res.redirect('/showUser')
});

app.get('/showUser',(req,res)=>{
    if('count' in req.session){
        req.session.count ++;
    }
    else{
        req.session.count =1;
    }
   return res.render('showUser',{user: req.session.user, count:req.session.count})
});

// testing my knowlege with javascript bellow chanallge
app.get("/newpage", (request, response)=>{
    console.log("just got on the new home page");
    response.render("homePage");
})

// this is the post route 
app.post('/register', (request, response)=>{
    console.log("just got  to the post route ");
    // i want to see the request data
    console.log(request.body);  
    // the response is redirecting  
    // save the user data on session
    // save user  username in session
    request.session.username = request.body.username;
    request.session.password = request.body.password;

    return response.redirect("/newpage")
})

app.post('/login2', (request, response)=>{
    // if request is the same in session alow user to get on the home page 
    // if(request.session.username == request.post.username &&  request.session.password == request.post.password){
        // this post function redirect to the dash 
        request.session.user = request.body.username;
        console.log(request.session.user);
        console.log("just got to the login 2 post data")
        return response.redirect('/dash');
})

app.get('/dash', (req, res)=>{
    console.log("just got to the dashboard ")
    console.log(req.session.user);
    // {user: req.session.user }
    // console.log(user);
    content = {
        'data': req.session.user
    }
    return res.render('dashboard' , content)
})



// must be at the bottom of our code
// written in two different way
// app.listen(port, function(){
//     console.log("listening on port 8000");
// });

// arrow function
app.listen(port, ()=> console.log(`listing on port ${port}...`));