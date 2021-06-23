const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Post = require('../models/post.model')

router.post('/post/add', auth.authMe, async(req,res)=>{
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

router.post('/post/me', auth.authMe, async(req,res)=>{
    try{
        await req.user.populate({
            path:'userPosts'
        }).execPopulate()
        res.send(req.user.userPosts)
    }
    catch(e){
        res.send(e)
    }
})

router.get('/post/:id', auth.authMe, async(req,res)=>{
    try{
        const post = Post.findById(req.params.id)
        res.send(post)
    }
    catch(e){res.send(e)}
})
router.get('/post/like/:id', auth.authMe, async(req,res)=>{
    try{
        const post = Post.findById(req.params.id)
        post.likes+=1
        res.send(post)
    }
    catch(e){res.send(e)}
})
module.exports = router
