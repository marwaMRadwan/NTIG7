import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivecomp',
  templateUrl: './reactivecomp.component.html',
  styleUrls: ['./reactivecomp.component.css']
})
export class ReactivecompComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]), //{value:"1", disabled:true}
    phone:new FormControl('', [Validators.pattern("^[0-9]+$"), Validators.minLength(11), Validators.maxLength(11)]),
    email:new FormControl('',[Validators.email]),
    content:new FormControl(),
    address: new FormGroup({
      city:new FormControl(),
      gov:new FormControl()
    })
  })
  // contact = this.fb.group({
  //   name:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
  // address:this.fb.group({
// city:['']
  // })
  // })
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
  }
  handelAdd(){
    console.log(this.contact.value)
  }
  get name(){
    return this.contact.get('name')
  }
}



// {
// name:'',
// age:"",
// address:{
//   city:'',
//   gov:""
// }
// }