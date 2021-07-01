import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
const Socket_ENDPOINT = "localhost:3000"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
socket:Socket;
message:string;
  constructor() { }

  ngOnInit(): void {
    this.socketConnection()
  }
  socketConnection(){
    this.socket = io(Socket_ENDPOINT)
    console.log('test')
    //chat-msgs
    this.socket.on('message-broadcast', (data:string)=>{
      if(data){
        const ele = document.createElement('li')
        ele.innerHTML=data
  document.querySelector('.chat-msgs').appendChild(ele)
      }
    })
  }
  sendMsg(){
    this.socket.emit('message', this.message)
    const ele = document.createElement('li')
    ele.innerHTML=this.message
document.querySelector('.chat-msgs').appendChild(ele)

    this.message=""
  }
}
