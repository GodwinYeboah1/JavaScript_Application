let mongoose = require('mongoose')
// create a user schema 
mongoose.model('User', new mongoose.Schema({
    // should have first last email  password with validation
    first : {type :String, required: true, minlength: 1, maxlength: 255},
    last : {type :String, required: true, minlength: 1, maxlength: 255},
    email : {type :String, required: true, minlength: 1, maxlength: 255},
    password :{type :String, required: true, minlength: 1, maxlength: 255}
}))