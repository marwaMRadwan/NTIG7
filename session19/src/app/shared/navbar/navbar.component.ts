import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// status = localStorage.getItem('status')
  constructor(public _global:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
this._global.logout().subscribe(res=>{

},()=>{},()=>{  localStorage.removeItem('token')
})

  }

}
