const mongoose = require("mongoose")

const userCartSchema = new mongoose.Schema({
    email:{type:String,required:true},
})

const SignupModel = mongoose.model("user",userSchema)

module.exports = SignupModel