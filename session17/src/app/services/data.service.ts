import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private _http: HttpClient) { }

  getData():Observable<any>{
    return this._http.get('http://jsonplaceholder.typicode.com/todos')
  }

  userRegister(data:User):Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/signUp', data)
  }
}
