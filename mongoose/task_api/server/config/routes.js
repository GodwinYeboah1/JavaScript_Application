require('./mongoose')


// import controllers

module.exports =(app)=>{

    app.get('/tasks',(req,res)=>{
        Task.find({}, (err,task)=>{
            if(err){
                console.log(err)
            }else{
                res.json(task)
            }
        })

    })
}