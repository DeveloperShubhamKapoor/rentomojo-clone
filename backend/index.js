const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const signupRoute = require('./routes/userRoutes/signup.route')
const loginRoute = require("./routes/userRoutes/login.route")
const smartphoneRoute = require("./routes/productRoutes/smartphones.route")
const authentication = require("./middleware/authentication")
const smartdevicesRoute = require("./routes/productRoutes/smartdevices.route")
const laptopsRoute = require("./routes/productRoutes/laptops.route")
const tabletsRoute = require("./routes/productRoutes/tablet.route")
const userCartRoute = require("./routes/cartRoutes/userCart.routes")

const app = express()
let port = process.env.PORT || 5500

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send({message:"Welcome to Rentomojo"})
})
app.use("/signup",signupRoute)
app.use("/login",loginRoute)
app.use("/electronics/smartphones",smartphoneRoute)
app.use("/electronics/smartdevices",smartdevicesRoute)
app.use("/electronics/laptops",laptopsRoute)
app.use("/electronics/tablets",tabletsRoute)
app.use(authentication)
app.use("/cart",userCartRoute)



app.listen(port,async()=>{
    try{
        await mongoose.connect(process.env.server)
        console.log("server started at port 5500")
    }
    catch(e){
        console.log(e)
    }
    

})