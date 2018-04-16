const express = require('express')
const app = express()

// 
app.use(express.static( __dirname + '/my-angular-app/dist' ));

app.listen(8000,(err)=>{
    if(err){console.log('there is an error ')}
    console.log('listing on port 8000')
})