const express = require("express")
const loginRoute = express.Router()
const signupModel = require("../../model/userSignup.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()


loginRoute.post("/",async(req,res)=>{
    const {email,password} = req.body
    const isPresent = await signupModel.findOne({email})
    if(isPresent){
        let hashedPassword = isPresent.password
        bcrypt.compare(password,hashedPassword).then(function(result){
            if(result){
                let token = jwt.sign({email:email},process.env.secretKey,{expiresIn:"2h"})
                res.send({msg:"Login Successfull",token:token,login:true})
            }
            else{
                res.send({msg:"Invalid Credentials",token:"",login:false})
            }
        })
    }
    else{
        res.send({msg:"Email does not exist",login:false})
    }
})





module.exports = loginRoute