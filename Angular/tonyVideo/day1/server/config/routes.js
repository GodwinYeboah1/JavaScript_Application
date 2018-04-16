let UserController = require('../controllers/UserController')
let path = require ('path')

module.exports = (app)=>{
    // back end routes data is already pass 
    // post data (private data coming in)
    app.post('/register', UserController.register)
    app.post('/login', UserController.login)
    
    // get data 
    app.get('/login', UserController.login)
    app.get('/session', UserController.session)

    // needs to be last in project 
    // * the stars mean check all of backend routes
    // if it cant find the route check the angualar folder 
    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}