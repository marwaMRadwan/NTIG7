const express = require('express')
const router = new express.Router()
const User = require('../models/user.model')
const authMe = require('../middleware/auth')
router.post('/user/register', async(req,res)=>{
    try{
        let user = new User(req.body)
        await user.save()
        let token = await user.generateAuthToken()
        res.status(200).send({
            status:true,
            message:"data inserted",
            data:{ token, user }
        })
    }
    catch(e){
        res.status(500).send({
            status:false,
            error:e,
            message:"data inserting error"
        })
    }
})

router.post('/user/login', async(req,res)=>{
    try{
        const user = await User.logMeOn(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({
            status:true,
            data: {user, token},
            message:"logged in"
        })
    }
    catch(e){
        res.status(500).send({
            status:false,
            data: e.message,
            message:"error in log in"
        })
    }
})

router.get('/user/all', async(req,res)=>{
    try{
        const users=await User.find()
        res.status(200).send({
            status:true,
            data:users,
            message:"done"
        })
    }
    catch(e){
        res.status(200).send({
            status:false,
            data:e,
            message:"done"
        })
    }
})

router.get('/myProfile', authMe, (req,res)=>{
    res.send({user:req.user, token:req.token})
})

router.post('/logout',authMe, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(ele=>{
            // console.log(ele.token, '-' , req.token)
            return ele.token!=req.token
        })
        //req.user.tokens=[]
        await req.user.save()
        res.status(200).send({
            status:true,
            message:'logged out'
        })
    }
    catch(e){
        res.status(500).send({
            status:false,
            message:'error',
            error:e.message
        })
    }
})
module.exports = router