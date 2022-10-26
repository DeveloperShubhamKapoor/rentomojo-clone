
const express = require("express")
const smartphoneModel = require("../../model/smartphones.model")

const smartphoneRoute = express.Router()

smartphoneRoute.get("/",async(req,res)=>{
    const data = await smartphoneModel.find()
     res.send(data)
})

smartphoneRoute.get("/:id",async(req,res)=>{
    const productId = req.params.id
    const data = await smartphoneModel.findOne({id:productId})
     res.send(data)
})



module.exports = smartphoneRoute
