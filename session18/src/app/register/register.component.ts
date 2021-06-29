import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user = new FormGroup({
  name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
  phone:new FormControl('',[Validators.minLength(11),Validators.maxLength(11), Validators.pattern("^[0-9]+$")]),
  email:new FormControl('', [Validators.email, Validators.required]),
  password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  role:new FormControl('',[Validators.required]),
  gender:new FormControl(''),
})
  constructor() { }

  ngOnInit(): void {
  }

  handleRegister(){
    
  }
}
