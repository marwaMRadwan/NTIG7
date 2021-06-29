import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayService } from '../services/play.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allRoles :any = []
  genders : any = [
    {gender:"Male", val: 0},
    {gender:"Female", val:1}
  ]
  isSubmitted : boolean= false
  user = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    phone:new FormControl('',[Validators.minLength(11),Validators.maxLength(11), Validators.pattern("^[0-9]+$")]),
    email:new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    role:new FormControl('',[Validators.required]),
    gender:new FormControl(''),
  })
  constructor(private _play:PlayService) {
    this.getRoles()
   }

  ngOnInit(): void {
  }
result : any ={}
msg : string= ""
  handleRegister(){
    let myData: User = this.user.value
this.isSubmitted=true
if(this.user.valid){
  this._play.register(myData).subscribe(res=>{
    this.result = res
  },
  ()=>{
    this.msg="error"
  },
  ()=>{
    if(this.result?.sucess!=""){ this.msg= "done"; this.user.reset(); this.isSubmitted=false }
    else this.msg="error"
  })
}
  }
  getRoles(){
    this._play.loadRoles().subscribe(data=>{
      console.log(data.data)
      this.allRoles = data.data
    })
  }
  get name(){ return this.user.get('name')}
  get phone(){ return this.user.get('phone')}
  get email(){ return this.user.get('email')}
  get password(){ return this.user.get('password')}
  get gender(){ return this.user.get('gender')}
  get role(){ return this.user.get('role')}
}
