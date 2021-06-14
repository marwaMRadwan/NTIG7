/*
npm init
==> create app.js file
npm i express

routes
route methods => get, post, put or patch, delete
*/
const express = require('express')
const app = express()
const path = require('path')
const myPublicDir = path.join(__dirname, '../public')
// f = __dirname+"\\x.html"
// console.log(f)
// test = path.join(__dirname,  'x.html')
// console.log(test)
// console.log(__dirname)
// console.log(__filename)
app.use(express.static(myPublicDir))
//routes
app.get('', (req,res)=>{
    res.send('hello')
})
app.get('/about', (req,res)=>{
    res.send('about')
})

app.get('/html', (req,res)=>{
    res.send('<h1>test</h1>')
})
app.get('/json', (req, res)=>{
    data = {
        name:"marwa",
        age:36
    }
    res.send(data)
})

app.get('/htmlFile', (req,res)=>{
    res.sendFile(path.join(__dirname, 'x.html'))
})
app.listen(3002, ()=>{
    console.log('server on localhost:3002')
})
