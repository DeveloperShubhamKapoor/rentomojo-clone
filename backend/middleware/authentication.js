
const jwt = require("jsonwebtoken")
require("dotenv").config()
const authentication = (req,res,next)=>{

    if(req.headers.token){
        const token = req.headers.token
        jwt.verify(token,process.env.secretkey,async(err,decoded)=>{
            //console.log(token)
            if(err){
                console.log(err)
                return res.send({msg:"Something went wrong login again",authorized:false})
            }
            else {
                req.body.userId  = decoded.email
                next()
            }
        })
    }
    else{
        return res.send({msg:"Not Authorized",authorized:false})
    }
}


module.exports = authentication