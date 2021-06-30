import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private commonUrl = `http://medical.mind-techs.com/api/auth/`
  constructor( private _http: HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}signUp`, data)
  }
}
