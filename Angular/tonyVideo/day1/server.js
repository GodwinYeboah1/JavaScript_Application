let express = require('express')
let session = require('express-session')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
const port = 8000;

app.use(bodyParser.urlencoded({extended:true}))
// make connection between both apps
app.use(express.static(__dirname + "/client/dist"))
app.use(express.json())
app.use(session({secret: "godwin"}))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(port,()=>{
    console.log(`listening on port${port}`)
})
