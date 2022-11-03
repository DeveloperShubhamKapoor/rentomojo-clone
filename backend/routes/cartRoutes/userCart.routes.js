const express = require("express")
const UserCartModel = require("../../model/userCart.model")

const userCartRoute = express.Router()

userCartRoute.get("/",async(req,res)=>{
    const{email} = req.body
    let data =  await UserCartModel.find({email:email})
    res.send(data)
})

userCartRoute.patch("/:id",async(req,res)=>{
    let id = req.params.id
    if(id){
        let updatedItem = await UserCartModel.findOneAndUpdate({id:id},{...req.body},{new:true})
        res.send(updatedItem)
    }
})

userCartRoute.delete("/:id",async(req,res)=>{
    let id = req.params.id
    if(id){
        let deleted = await UserCartModel.findOneAndDelete({id:id})
        res.send(deleted)
    }
})






module.exports = userCartRoute