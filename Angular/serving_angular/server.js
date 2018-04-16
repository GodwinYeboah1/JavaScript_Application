const express = require("express")
const app = express()
const port = 8000



// middle ware
app.use(express.static( __dirname + '/serving/dist' ));

app.get('/',(req,res)=>{


})

app.listen(port,(err)=>{
    if(err){
        console.log('error');
    }else{
        console.log(`listening on port ${port}`);
    }
})

