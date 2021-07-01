const express=require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded())

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
let storage = multer.diskStorage({
    destination:function(req,file, cb) {cb(null, 'images')},
    filename: function(req,file,cb){ cb(null, file.originalname)}
})
upload = multer({storage})

app.post('/upload/image', upload.single('img'), (req,res,next)=>{
    const file = req.file
    res.send(file)
})

app.post('/upload/image', upload.array('img'), (req,res,next)=>{
    const file = req.files
    res.send(file)
})
app.listen(3000)