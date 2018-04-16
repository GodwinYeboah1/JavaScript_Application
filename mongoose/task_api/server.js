const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const port = 8000;


// middleware

// receieve jason data
app.use(bodyParser.json())

// require mongoose file
require('./server/config/mongoose')

// require routes file
require('./server/config/routes')(app)



// routes
app.listen(port, function(){
    console.log(`listening on ${port}`)
})