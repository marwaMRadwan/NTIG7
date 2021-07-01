import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
public status = false
  private commonUrl = `http://medical.mind-techs.com/api/auth/`
  constructor( private _http: HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}signUp`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}login`, data)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonUrl}me`, {lang_id:1})
  }
  logout():Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/logout', null)
  }
}
