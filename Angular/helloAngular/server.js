const express = require("express")
const app = express()
const port = 8000

// middle ware
// path way to the angular application
app.use(express.static( __dirname + '/helloApp/dist' ));

app.get('/',(req,res)=>{
// does noting 
})
app.listen(port,(err)=>{
    if(err){
        console.log('error');
    }else{
        console.log(`listening on port ${port}`);
    }
})

