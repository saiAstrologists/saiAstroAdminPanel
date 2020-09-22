import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isUserLogin = new BehaviorSubject<boolean>(false);
  checkUserLoginStatus= this.isUserLogin.asObservable();
  constructor(
    private toaster: MatSnackBar
  ) { }

  setUserLoginStatus(data: boolean){
    this.isUserLogin.next(data);
  }

  // toaster
  viewToaster(message) {
    this.toaster.open(message, 'close', {
      duration: 10 * 1000,
      horizontalPosition : "center",
      verticalPosition : "top"
    })
  }
  // toaster end

  
}
