const express = require('express')
const router = new express.Router()
const authMe = require('../middleware/auth')
const Post = require('../models/post.model')

router.post('/post/add', authMe, async(req,res)=>{
    // data = req.body
    // data.user_id = req.user._id
    // d = {
    //     ...req.body,user_id:req.user._id
    // }
    // res.send(d)
    try{
        let data = new Post({
            ...req.body,
            'user_id':req.user._id
        })
        await data.save()
        res.send('added')
    }
    catch(e){
        res.send(e)
    }
})

module.exports = router
