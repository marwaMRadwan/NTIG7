
const app = require('express')()
const http = require('http').createServer(app)
const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });
// app.get('/', (req,res)=> res.sendFile(__dirname+"/index.html"))

io.on('connection', (socket)=>{
    console.log('user on')

socket.on('message', (msg)=>{
    console.log(msg)
    socket.broadcast.emit('message-broadcast', msg)
})
})
http.listen(3000)

  