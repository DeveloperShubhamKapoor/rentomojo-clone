const mongoose = require("mongoose")

const tabletSchema = new mongoose.Schema({
    id:{type:String,required:true},
    title:{type:String,required:true},
    img_full:{type:String,required:true},
    rent3:{type:String,required:true},
    rent6:{type:String,required:true},
    refundable:{type:String,required:true},
    description:{type:Array},
    img:{type:String,required:true}
})

const tabletModel = mongoose.model("tablet",tabletSchema)

module.exports = tabletModel