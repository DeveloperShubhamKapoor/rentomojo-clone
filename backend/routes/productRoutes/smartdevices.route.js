
const express = require("express")
const smartdevicesModel = require("../../model/smartdevices.model")

const smartdevicesRoute = express.Router()

smartdevicesRoute.get("/",async(req,res)=>{
    const data = await smartdevicesModel.find()
     res.send(data)
})

smartdevicesRoute.get("/:id",async(req,res)=>{
    const productId = req.params.id
    const data = await smartdevicesModel.findOne({id:productId})
     res.send(data)
})



module.exports = smartdevicesRoute
