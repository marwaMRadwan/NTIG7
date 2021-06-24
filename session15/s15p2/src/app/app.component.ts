import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = ""
  title = 'hhh';
  testVal = 'q'
  link="http://www.techsexperts.com"
  a = "<h1>hello</h1>"
  cName="block"
  x(){
    return 'hello'
  }
  changeMe(){
    this.cName == "block"? this.cName="none":this.cName="block"
  }
  clearData(){ this.data = "" }
  chng(event:any){
    // console.log(event)
    this.data=event.target.value
  }


myD=""




}
