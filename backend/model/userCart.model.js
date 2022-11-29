const mongoose = require("mongoose")

const userCartSchema = new mongoose.Schema({
    email:{type:String,required:true},
    id:{type:String,required:true},
    title:{type:String,required:true},
    img_full:{type:String,required:true},
    img:{type:String,required:true},
    rent3:{type:String,required:true},
    rent6:{type:String,required:true},
    refundable:{type:String,required:true},
    refundableTotal:{type:String,required:true},
    totalAmount:{type:String,required:true},
    quantity:{type:Number,required:true},
    planPrice:{type:String,required:true},
    description:{type:Array}
})

const UserCartModel = mongoose.model("cart",userCartSchema)

module.exports = UserCartModel