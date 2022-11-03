
const express = require("express")
const laptopModel = require("../../model/laptops.model")

const laptopsRoute = express.Router()

laptopsRoute.get("/",async(req,res)=>{
    const data = await laptopModel.find()
     res.send(data)
})

laptopsRoute.get("/:id",async(req,res)=>{
    const productId = req.params.id
    const data = await laptopModel.findOne({id:productId})
     res.send(data)
})



module.exports = laptopsRoute
