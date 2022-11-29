const express = require("express")
const loginRoute = express.Router()
const signupModel = require("../../model/userSignup.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()


loginRoute.post("/",async(req,res)=>{
    const {email,password} = req.body
    const isPresent = await signupModel.findOne({email})
    if(!email.includes(".com")&& !email.includes(".in") && !email.includes(".org") && !email.includes(".net")){
        return res.send({msg:"Top level domain should be .com or .in  or .net or .org ",login:false,token:""})
    }
    else if(!email.includes("@")){
        return res.send({msg:"Email should contain @",login:false,token:""})
    }
    else if(email[0]=="."){
        return res.send({msg:"First character should not be '.' ",login:false,token:""})
        
    }
    else if(email.includes("@")&& email[0]=="@"){
        return res.send({msg:"First character should not be '@' ",login:false,token:""})   
    }
    else if(email.includes("@.")){
        return res.send({msg:"Invalid format",login:false,token:""})

    }
    else if(email.includes("!")||email.includes("#")||email.includes("$")||email.includes("%")||email.includes("&")||email.includes("*")||email.includes("(")||email.includes(")")){
        return res.send({msg:"Invalid format",login:false,token:""})
        
    }
    else if(email.includes("..")){
        return res.send({msg:"Invalid format",login:false,token:""})
    }
    if(isPresent){
        let hashedPassword = isPresent.password
        bcrypt.compare(password,hashedPassword).then(function(result){
            if(result){
                let token = jwt.sign({email:email},process.env.secretKey)
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