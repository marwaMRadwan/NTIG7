import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new FormGroup({
  email:new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
})
  constructor() { }

  ngOnInit(): void {
  }
handleLogin(){}
}
