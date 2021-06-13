//nodemon src/app
//sudo npm i -g nodemon
//npm i hbs
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const PORT = 3000
const app = express()

//static files directory (html, css, images, .... all static files)
const publicDirectory = path.join(__dirname, '../public')
//all pages hbs files
const myViews = path.join(__dirname, "../myHbs/views")
//all common partial files
const myLayoutss = path.join(__dirname, "../myHbs/layouts")

//set usage static, layouts, pages
app.set('view engine', 'hbs')
app.set('views', myViews)
app.use(express.static(publicDirectory))
hbs.registerPartials(myLayoutss)
//routes
app.get('', (req,res)=>{
    data = {name:"marwa"}
    res.render('home', data)
})
app.get('/about', (req,res)=>{
    data = {name:"marwa"}
    res.render('about', data)
})

app.get('/images', (req,res)=>{
    fs=require('fs')
data = JSON.parse(fs.readFileSync('data/all.json').toString())
console.log(data)

    res.render('images', {data, age:false})
})
app.get('/images/:id',(req,res)=>{

    res.send(req.params.id)
})
app.get('/test', (req,res)=>{
    res.send(req.query)
})
app.get('*',(req,res)=>{
    res.send('page not found')
})

//listen
app.listen(PORT, console.log(`we are on ${PORT}`))






