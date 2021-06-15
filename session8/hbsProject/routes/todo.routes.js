const express = require('express')
const router = new express.Router()
const todoController = require('../controller/tasks.controller')

router.get('', todoController.showAll)
router.get('/addTask', todoController.addTask)
router.get('/showSingle/:id', todoController.showSingle)
router.get('/editTask/:id', todoController.editTask)
router.get('/deleteTask/:id', todoController.deleteTask)

module.exports=router