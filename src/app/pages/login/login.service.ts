import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../shared/services/restService/rest.service';
import { ResturlService } from '../../shared/constants/resturl/resturl.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private restService: RestService
  ) { }

  loginUser(data): Observable<any>{
    return this.restService.create(ResturlService.login, data);
  }

  forgotPassword(data): Observable<any>{
    return this.restService.create(ResturlService.forgotPswd, data);
  }

  verifyMobotp(data): Observable<any>{
    return this.restService.create(ResturlService.verifyotp, data);
  }

  resetLoginPassword(data): Observable<any>{
    return this.restService.create(ResturlService.resetPassword, data);
  }
}
