const express = require('express')
const router = new express.Router()
const userController = require('../config/controller/users.controller')
router.get('', userController.showAll)
router.get('/single/:id', userController.showSingle)
router.get('/delete/:id', userController.deleteUser)
router.get('/edit/:id', userController.editSingle)
router.post('/edit/:id', userController.editData)

router.get('/addUser', userController.addNewUserView)
router.post('/addUser', userController.addNewUserPOST)

router.get('*', (req,res)=>{res.send('404')})
module.exports = router