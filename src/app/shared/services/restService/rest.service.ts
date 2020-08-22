import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) { }

  create(reqUrl, reqData): Observable<any>{
    return this.http.post(environment.url+reqUrl, reqData);
  }

  get(reqUrl): Observable<any>{
    return this.http.get(environment.url+reqUrl);
  }
}
