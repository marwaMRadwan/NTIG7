import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
public serTest: string = "testS"
  constructor(private _http:HttpClient) { }
  loadRoles(): Observable<any>{ 
    return this._http.get('http://medical.mind-techs.com/api/auth/loadRoles/1')
  }
  register(data:User): Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/signUp', data)
  }
}
