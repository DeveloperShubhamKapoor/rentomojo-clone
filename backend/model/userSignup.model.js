const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const SignupModel = mongoose.model("user",userSchema)

module.exports = SignupModel