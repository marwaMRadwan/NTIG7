const express = require('express')
const path = require('path')
const hbs = require('hbs')
const session = require('express-session')
const userRoutes = require('../routes/users.routes')
const app = express()
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))
hbs.registerPartials(path.join(__dirname, '../frontend/layouts'))
app.set('views', path.join(__dirname, '../frontend/views'))
app.use(express.urlencoded())
app.use(session({secret:'abc'}))

app.get('/test', (req,res)=>{
    req.session.id = 5
   res.send(req.session.id)
 //  res.redirect('/test2')
})

// app.get('/test2', (req,res)=>{
//     res.send(req.session.id)
// })

app.use(userRoutes)

module.exports = app