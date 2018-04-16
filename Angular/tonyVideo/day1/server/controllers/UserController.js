
// allows us to use functional in our project 
let User = require('mongoose').model("User")
class UserController{ 
    register(req,res){
        // console.log(req.body)
        User.findOne({email:req.body.email}, (err, user)=>{
            // if err it should allow user to register 
            if(user){
                return res.json({errors:"A user with this email already exist"})
            }else{
                console.log('User can register')
                let user = new User(req.body)
                // saving user to the database
                user.save((err)=>{
                        if(err){
                            return res.json({errors:user.errors})
                        }else{
                            // console.log(user._id)
                            req.session.user_id = user._id
                            return res.json(user)
                        }
                })
            }
        })}
    login(req,res){
        // user should be already in  my database
        User.findOne({email: req.body.email}, (err, user)=>{
            if(err){
                console.log('This email exist in the database')
                // login them in 
                // dict for errors it help full
                res.json({errors:"This Email does not exist"})
            }else{
                // true to password matches
              if(user.password == req.body.password){
                // store user in session 
                // setting the the current user id in session
                req.session.user_id = user._id
                // passing all of that user data 
                    return res.json(user)
              }else{
                  res.json({errors: "invaild credential"})
                }
            }
        })
    }
    logout(req,res){
        // clear out the request session 
        request.session.user_id = null;
        return false;
    }
    session(req,res){
        if(req.session.user_id){
            console.log(req.session.user_id)

            User.findOne({_id:req.session.user_id}, (err, user)=>{
                if(err){
                    return res.json({errors: "failed to validate session"})
                }else{
                    return res.json(user)
                }
            })
        }
        else{
            return res.json({errors: "invalid session"})
        }
}
}
module.exports =  new UserController();

