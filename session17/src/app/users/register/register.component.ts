import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
data:User={
  name:'',
  email:"",
  phone:"",
  gender:"",
  password:"",
  role:1
}
  constructor(public _dataService:DataService) { }

  ngOnInit(): void {
  }
  handelRegister(){
    console.log(this.data)
this._dataService.userRegister(this.data).subscribe(res=>{console.log(res)})
  }
}
