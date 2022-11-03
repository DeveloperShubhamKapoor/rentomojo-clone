
const express = require("express")
const tabletModel = require("../../model/tablets.model")

const tabletsRoute = express.Router()

tabletsRoute.get("/",async(req,res)=>{
    const data = await tabletModel.find()
     res.send(data)
})

tabletsRoute.get("/:id",async(req,res)=>{
    const productId = req.params.id
    const data = await tabletModel.findOne({id:productId})
     res.send(data)
})



module.exports = tabletsRoute
