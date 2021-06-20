const express = require('express')
const router = new express.Router()
// const userController = require('../controller/users.controller')
const userModel = require('../models/users.model')

router.post('/add', (req,res)=>{
// res.send(req.body)

    let me = new userModel(req.body)
    me.save().then(
        ()=> res.send('done')
    )
    .catch((e)=>res.send(e.message))
})
router.post('/register', async(req,res)=>{
    try{
        me= new userModel(req.body)
        await me.save()
        res.send('inserted')
    }
    catch(e){
        res.send(e.message)
    }
})  
router.get('/all', async(req,res)=>{
    try{
        const data = await userModel.find()
        res.send(data)    
    }
    catch(e){
        res.send(e.message)
    }
})
router.get('/all/:id', async(req,res)=>{
    const _id = req.params.id
    try{
        const data = await userModel.findById(_id)
        if(!data) res.send('not found')
        res.send(data)    
    }
    catch(e){
        res.send(e.message)
    }
})
router.delete('/all/:id', async(req,res)=>{
    const _id = req.params.id
    try{
        const data = await userModel.findByIdAndDelete(_id)
        if(!data) res.send('user not found')
        res.send('deleted')
    }
    catch(e){
        res.send(e)
    }
})
module.exports=router