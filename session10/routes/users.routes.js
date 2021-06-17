const express = require('express')
const router = new express.Router()
const userController = require('../controller/users.controller')

router.get('', userController.login)
router.post('', userController.loginPost)

router.get('/addUser', userController.addNewUserView)
router.post('/addUser', userController.addNewUserPOST)

router.get('*', (req,res)=>{res.send('404')})

module.exports = router