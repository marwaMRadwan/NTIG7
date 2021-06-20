const express = require('express')
require('../db/db')
const userRoutes =  require('../routes/users.routes')
const bookRoutes = require('../routes/book.routes')
const app = express()
app.use(express.json())
app.use(userRoutes)
app.use(bookRoutes)
module.exports=app