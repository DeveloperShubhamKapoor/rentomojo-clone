const express = require("express")
const signupModel = require("../../model/userSignup.model")
const signupRoute = express.Router()
const bcrypt = require("bcrypt")


signupRoute.post("/",async(req,res)=>{
    const {email,password} = req.body
    if(!email.includes(".com")&& !email.includes(".in") && !email.includes(".org") && !email.includes(".net")){
        return res.send({msg:"Top level domain should be .com or .in  or .net or .org ",signupSuccess:false})
    }
    else if(!email.includes("@")){
        return res.send({msg:"Email should contain @",signupSuccess:false})
    }
    else if(email[0]=="."){
        return res.send({msg:"Invalid format",signupSuccess:false})
        
    }
    else if(email.includes("@")&& email[0]=="@"){
        return res.send({msg:"Invalid format",signupSuccess:false})   
    }
    else if(email.includes("@.")){
        return res.send({msg:"Invalid format",signupSuccess:false})

    }
    else if(email.includes("!")||email.includes("#")||email.includes("$")||email.includes("%")||email.includes("&")||email.includes("*")||email.includes("(")||email.includes(")")){
        return res.send({msg:"Invalid format",signupSuccess:false})
        
    }
    else if(email.includes("..")){
        return res.send({msg:"Invalid format",signupSuccess:false})
    }
    const isPresent  = await signupModel.findOne({email})
    if(isPresent){
        return res.send({msg:"Email already exist",signupSuccess:false})
    }
    else if(password.includes("@")&&password.length>=6){
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                return res.send({msg:"Invalid Credential",signupSuccess:false})
            }
            else{
                const user = new signupModel({email:email,password:hash})
                await user.save()
                return res.send({msg:"Signup Successful",signupSuccess:true})
            }
        })
    }
    else{
        res.send({msg:"Password Must contain @ and must be atleast 6 letters ",signupSuccess:false})
    }    
})


module.exports = signupRoute