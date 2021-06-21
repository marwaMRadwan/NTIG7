const express = require('express')
const userRoutes = require('../routes/user.routes')
require('../dbConnection/db')
const app = express()
app.use(express.json())
app.use(userRoutes)
// const userModel = require('../models/user.model')
// app.post('/add', async(req,res)=>{
//     try{
//         let test = new userModel({fname:"marwa", lname:"radwan",password:'123456'})
//         test.save()
//         res.send(test)
//     }
//     catch(e){
//         res.send(e)
//     }
// })

module.exports=app