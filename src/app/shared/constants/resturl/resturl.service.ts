import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResturlService {

  constructor() { }
  
  public static get login(): string { return '/login'; }
  public static get forgotPswd(): string { return '/forgotPassword'; }
  public static get verifyotp(): string { return '/verifyotp'; }
  public static get resetPassword(): string { return '/resetPassword'; }

  // astrologer
  public static get astrologerList(): string {return '/users/getastrologerslist'; }

  // 9137490540

  
}
