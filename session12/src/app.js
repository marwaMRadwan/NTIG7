const express = require('express')
require('../dbConnection/db')
const app = express()
const userModel = require('../models/user.model')
app.post('/add', async(req,res)=>{
    try{
        let test = new userModel({fname:"marwa", lname:"radwan",password:'123456'})
        test.save()
        res.send(test)
    }
    catch(e){
        res.send(e)
    }
})

module.exports=app