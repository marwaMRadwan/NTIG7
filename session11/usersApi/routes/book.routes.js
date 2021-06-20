const control = require('../controller/users.controller')
const express = require('express')
const router= new express.Router()
router.post('/addBook', control.addBook)

module.exports=router