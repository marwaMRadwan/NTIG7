const express = require('express')
const router = new express.Router()
const userController = require('../controller/users.controller')
router.get('', (req,res)=> res.send('env'))

router.get('/addUser', userController.addNewUserView)
router.post('/addUser', userController.addNewUserPOST)
module.exports = router