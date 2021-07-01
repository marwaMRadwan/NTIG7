import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  constructor(private _global:GlobalService, private _activated: ActivatedRoute) { 
    this.getMe()
    // this._activated.queryParamMap.subscribe(params=>{console.log(params.get('x'))})
    console.log(
      this._activated.snapshot.queryParamMap.get('x')
    )
  }

  ngOnInit(): void {
  }
  data : any =[]
getMe(){
  this._global.me().subscribe(res=>{this.data=res[0]; console.log(res)})
}

}
