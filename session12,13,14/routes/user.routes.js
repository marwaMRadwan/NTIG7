const express = require('express')
const router = new express.Router()
const User = require('../models/user.model')
const auth = require('../middleware/auth')
router.post('/user/register', async(req,res)=>{
    try{
        let user = new User(req.body)
        user.activateCode="abc"
        // user.friends = []
        // /user/activate?email=test@test.com&key=abc
        // res.send(user)
        await user.save()
        // let token = await user.generateAuthToken()
        res.status(200).send({
            status:true,
            message:"data inserted",
            data:{ user }
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

router.get('/me', auth.authMe, (req,res)=>{
    res.send({user:req.user, token:req.token})
})

router.post('/logout',auth.authMe, async(req,res)=>{
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

router.post('/logoutAll',auth.authMe, async(req,res)=>{
    try{
        req.user.tokens=[]
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

//edit user ==> fname, lname, password  req.body 
router.patch('/user/edit', auth.authMe, async(req,res)=>{
    reqUpdates = Object.keys(req.body) //[fname,email, lname ]
    allowed = ['fname', 'lname', 'password']
    //every
    isValidUpdates = reqUpdates.every( update => allowed.includes(update) )
    if(!isValidUpdates) return res.status(500).send({
        status:false,
        message:"invalid updates"
    })
    try{
        //req.user  
        reqUpdates.forEach(update=>{
            req.user[update] = req.body[update]
        })
        await req.user.save()
        res.status(200).send({
            message:'updated', status:true
        })
    }
    catch(e){
        res.status(500).send({
            status:false,
            message:e.message
        })
    }
})

router.put('/user/activate', auth.authMe, async(req,res)=>{
    try{
        req.user.accountStatus=true
        await req.user.save()
        res.status(200).send()
    }
    catch(e){}
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
 // /user/activateMe?email=test@test.com&key=abc
 router.patch('/user/activateMe', async(req,res)=>{
    try{
        data = req.query
        if(!req.query.email || !req.query.key) res.send('invalid url')
        const user=await User.findOne({email:data.email, activateCode:data.key})
       if(user.accountStatus) res.send('already active')
        user.accountStatus = true
        user.activateCode = null
        await user.save()
        res.status(200).send('done')
    }
    catch(e){
        res.status(500).send(e)
    }
 })

router.post('/user/addFriend',auth.authMe, async(req,res)=>{
    try{
        const fId = req.body.fId
        if(req.user._id==fId) throw new Error('you can\'t add your self' )
        let added = req.user.friends.findIndex(f=>{
            return fId == f.friend_id
        })
        if(added !=-1) throw new Error('added before') 
        const friend = await User.findById(fId)
        if(!friend) throw new Error('invalid user id')
        // res.send(fId)
        req.user.friends.push({friend_id:fId})
        // res.send(req.user.friends)
        await req.user.save()
        res.send('friend added')
    }
    catch(e){
        res.send(e.message)
    }
})

router.delete('/user/delete', auth.authMe, async(req,res)=>{
    try{    
        await req.user.remove()
    }
    catch(e){}
})

router.delete('/admin/userDel/:id', auth.adminAuth, async(req,res)=>{
    try{
        _id = req.params.id
        await User.findByIdAndDelete(_id)
        res.send('done')
    }
    catch(e){
res.send(e)
    }
})

router.patch('/user/deactivate', auth.generalAuth, async(req,res)=>{
    try{
        req.user.userStatus=false
        await req.user.save()
        res.send('stopped')
    }
    catch(e){
        res.send(e)
    }
})

router.post('/removeFriend', auth.authMe, async(req,res)=>{
    try{
        // let len = req.user.friends.length

        // req.user.friends = req.user.friend.filter(el => req.body.fId != el.friend_id)
        // if(req.user.friends.length == len) res.send('user not found')
         search = req.user.friends.findIndex(el => el.friend_id==req.body.fId)
         if(search==-1)  res.send('user not found')
         req.user.friends.splice(search,1)
         req.user.save()
        res.send('done')
    }
    catch(e){res.send(e)}
})

const multer= require('multer')
const fs= require('fs')
// var upload = multer({ dest: 'uploads/' })
// router.post('/profile',auth.authMe, upload.single('profile'), async(req,res)=>{
//     //_id  /uploads/${req.user._id}.${ext}
//     fileWithExt = `${req.file.path}.${req.file.originalname.split('.').pop()}`
//     fs.rename(req.file.path, fileWithExt, (err)=>{ if(err) console.log(err) })
//     req.user.userImage = fileWithExt
//     await req.user.save()
//     res.send(req.file)
// })

// imgname = ''
// let storage = multer.diskStorage({
//     destination: function(req,res,cb) {cb(null, 'images')},
//     filename: function(req,file, cb){
//         imgname = Date.now()+'.'+(file.originalname.split('.').pop())
//         cb(null, imgname)
//     }
// })
// let upload = multer({storage: storage})
// // fs.mkdirSync('./dir');
// router.post('/upload', upload.single('profile'), async(req,res)=>{
//     // req.user.img = imgname
//     res.send('done')
// })
// router.post('/uploadmulti', upload.array('profile'), async(req,res)=>{
//     res.send('done')
// })
var upload = multer({ dest: 'uploads/' })
router.post('/profile1', upload.array('profile'), async(req,res)=>{
    //_id  /uploads/${req.user._id}.${ext}
    // res.send(req.files)
    files = []
    req.files.forEach(file=>{
    fileWithExt = `${file.path}.${file.originalname.split('.').pop()}`
    fs.rename(file.path, fileWithExt, (err)=>{ if(err) console.log(err) })
    files.push(fileWithExt)

    })
    res.send(files)
})


module.exports = router