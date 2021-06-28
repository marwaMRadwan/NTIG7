import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersdataService } from 'src/app/services/providersdata.service';
@Component({
  selector: 'app-single-role',
  templateUrl: './single-role.component.html',
  styleUrls: ['./single-role.component.css']
})
export class SingleRoleComponent implements OnInit {
isLoaded : boolean = false
  slug:any
allData :any = []
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProService:ProvidersdataService) { 
    // this._ActivatedRoute.paramMap.subscribe(params=>{
    //   this.slug = params.get('slug')
    // })
    this.getData()
  }

  ngOnInit(): void {
  }
//   {
//     "role_id" : "Ray123mailinatorcom2341"
// }
getData(){
  // this.slug = this._ActivatedRoute.snapshot.paramMap.get('slug')
  let reqObj = {"role_id" : this._ActivatedRoute.snapshot.paramMap.get('slug') }
  this._ProService.loadProviders(reqObj).subscribe(res=>{
    console.log(res.data)
  this.allData = res.data
  },
  ()=>{},
  ()=>{
    this.isLoaded=true
  }
  )
}
}
