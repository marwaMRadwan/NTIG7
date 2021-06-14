const taskContoller = require('../controllers/tasks')
const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../frontend')
const viewsDir = path.join(__dirname, '../resources/views')
const layoutsDir = path.join(__dirname, '../resources/layouts')
app.use(express.static(publicDir))
app.set('views', viewsDir)
hbs.registerPartials(layoutsDir)
/*
app.get('', (req,res)=>{
    resData = { pageTitle:"home Page", err:false, tasks : null }
    taskContoller.taskApi((err, data)=>{
        if(err) resData.err=true
        else resData.tasks = data
        res.render('index', resData)
    })
})
app.get('/tasks', (req,res)=>{
    res.render('tasks', {pageTitle: "tasks Page"})
})
let alldata = []
app.get('/contact', (req,res)=>{
    // console.log(req.query)
    if(req.query.name && req.query.content){
        data = req.query
        alldata.push(data)    
        res.redirect('/contact')
    }
    console.log(alldata)
    res.render('contact')
})
*/

/* add task, edit task, show all tasks, show single task, delete task */
const todo = require('../controllers/todoApp.controller')
app.get('/addTask', todo.addTaskController)
app.get('/allTask', todo.showAllTasksController)
app.get('/showSingle/:id', todo.showSingleTask)
app.get('/delete/:id', todo.deleteSingleTask)
app.get('/editSingle/:id', todo.editSingleTask)

module.exports = app