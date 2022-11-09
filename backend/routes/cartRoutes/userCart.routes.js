const express = require("express")
const UserCartModel = require("../../model/userCart.model")

const userCartRoute = express.Router()

userCartRoute.get("/",async(req,res)=>{
    
    const{userId} = req.body
    let data =  await UserCartModel.find({email:userId})
   res.send({data:data})
})

userCartRoute.post("/",async(req,res)=>{
    const cartItem = await UserCartModel({...req.body,email:req.body.userId})
    await cartItem.save()
    res.send({data:cartItem})
})

userCartRoute.patch("/:id",async(req,res)=>{
    let id = req.params.id
    if(id){
        let updatedItem = await UserCartModel.findOneAndUpdate({id:id},{...req.body},{new:true})
        res.send({data:updatedItem})
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