import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isUserLogin = new BehaviorSubject<boolean>(false);
  checkUserLoginStatus= this.isUserLogin.asObservable();
  constructor() { }

  setUserLoginStatus(data: boolean){
    this.isUserLogin.next(data);
  }
}
