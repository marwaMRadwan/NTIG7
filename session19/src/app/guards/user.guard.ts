import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
   let  token = localStorage.getItem('token')
      if(!token) {
        alert('you are not allowed to open')
      // this.router.navigate(["login"], {queryParams:{retUrl: "error "}})
this.router.navigateByUrl('/login?err=test')
      }
    return true;
  }
  
}
