import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProvidersdataService {
  commonApiUrl = 'http://medical.mind-techs.com/api/auth/'
  langId : number = 1
  constructor(private _http:HttpClient) { }

  loadRoles():Observable<any>{
    return this._http.get(`${this.commonApiUrl}loadRoles/${this.langId}`)
  }

  loadProviders(data:any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}LoadProvidersBySlug/${this.langId}/0/10`,data)
  }

  loadSingleProvider(userSlug:any):Observable<any>{
    return this._http.get(`${this.commonApiUrl}SingleDatabySlug/${userSlug}/${this.langId}`)
  }
}
