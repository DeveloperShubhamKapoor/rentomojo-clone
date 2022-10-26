const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const signupRoute = require('./routes/userRoutes/signup.route')
const loginRoute = require("./routes/userRoutes/login.route")
const smartphoneRoute = require("./routes/productRoutes/smartphones.route")
const authentication = require("./middleware/authentication")

const app = express()


app.use(express.json())
app.use(cors())
app.use("/signup",signupRoute)
app.use("/login",loginRoute)
app.use("/smartphones",smartphoneRoute)
app.use(authentication)



app.listen(5500,async()=>{
    try{
        await mongoose.connect(process.env.server)
        console.log("server started at port 5500")
    }
    catch(e){
        console.log(e)
    }
    

})