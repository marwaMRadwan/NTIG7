import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
data :any=[]
  constructor(private _data:DataService) {
    this.reciveData()
   }

  ngOnInit(): void {
  }

  reciveData(){
this._data.getData().subscribe(res=>{
  console.log(res)
this.data = res
})
  }
}
