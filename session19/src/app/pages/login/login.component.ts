import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new FormGroup({
  email:new FormControl(),//'', [Validators.email, Validators.required]),
    password:new FormControl('')//,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
})
loginRes:any = null
isSubmitted :boolean = false
  constructor(private _global:GlobalService, private router:Router) { }

  get email(){return this.user.get('email')}
  get password(){return this.user.get('password')}
  ngOnInit(): void {
  }
  msg = ""
handleLogin(){
  console.log(this.user)
  this.isSubmitted=true
  if(this.user.valid){
this._global.login(this.user.value).subscribe(res=>{
   this.loginRes = res
   console.log(res)
},()=>{},
()=>{
  if(this.loginRes.error)  this.msg="error"
else{
  let token = this.loginRes.token_type + " " + this.loginRes.access_token
  localStorage.setItem('token', token)
  localStorage.setItem('status', '1')
  this._global.status=true
this.router.navigate(['/allData'])
}
})
  }
}
}
