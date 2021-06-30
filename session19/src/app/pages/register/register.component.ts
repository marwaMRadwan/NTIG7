import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allRoles : any = [
        {
            "id": "1",
            "title": "patient",
            "slug": "patient"
        },
        {
            "id": "2",
            "title": "Medical laboratories",
            "slug": "Medical_laboratories"
        },
        {
            "id": "3",
            "title": "Doctors",
            "slug": "Doctors"
        },
        {
            "id": "4",
            "title": "Radiology Centers",
            "slug": "Radiology_Centers"
        },
        {
            "id": "5",
            "title": "Pharmacies",
            "slug": "Pharmacies"
        }
    ]
genders:any = [
  {val:0, gender:"Male"},
  {val:1, gender:"Female"},
]
isSubmitted:boolean = false
  user = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    phone:new FormControl('',[Validators.minLength(11),Validators.maxLength(11), Validators.pattern("^[0-9]+$")]),
    email:new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    role:new FormControl('',[Validators.required]),
    gender:new FormControl(''),
  })
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }
  get name(){return this.user.get('name')}
  get phone(){return this.user.get('phone')}
  get email(){return this.user.get('email')}
  get password(){return this.user.get('password')}
  get role(){return this.user.get('role')}
  get gender(){return this.user.get('gender')}
  
  handleRegister(){
    this.isSubmitted=true
    if(this.user.valid){
this._global.register(this.user.value).subscribe(res=>{
  console.log(res)
})
    }
  }
}
