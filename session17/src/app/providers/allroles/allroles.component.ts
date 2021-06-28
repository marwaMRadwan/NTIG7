import { Component, OnInit } from '@angular/core';
import { ProvidersdataService } from 'src/app/services/providersdata.service';

@Component({
  selector: 'app-allroles',
  templateUrl: './allroles.component.html',
  styleUrls: ['./allroles.component.css']
})
export class AllrolesComponent implements OnInit {
rolesData : any = []
isRoleLoaded:boolean = false
  constructor(private _proService:ProvidersdataService) { 
    this.loadData()
  }

  ngOnInit(): void {
  }

  loadData(){
    this._proService.loadRoles().subscribe(
      (res)=>{
      console.log(res.data)
      this.rolesData=res.data
    },
    ()=>{
//error handel
    },
    ()=>{
      this.isRoleLoaded=true
    }  
    )
  }
}
