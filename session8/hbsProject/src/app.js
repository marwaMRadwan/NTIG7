const express = require('express')
const hbs = require('hbs')
const path = require('path')
const validator = require('validator')

const todoRoutes = require('../routes/todo.routes')

app = express()
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname,'../resources/views'))
hbs.registerPartials(path.join(__dirname,'../resources/layouts'))

app.use(todoRoutes)

module.exports = app