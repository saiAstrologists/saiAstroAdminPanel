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
  public static get astrologerList(): string {return '/listOfAstrologers'; }
  public static get astrologerDetail(): string {return '/getastrologerdetails'; }
  public static get appectRejectAppltn(): string {return '/acceptApplication'; }

  // admin
  public static get createAdmin(): string { return '/create'; }
  public static get adminList(): string { return '/listofadmin'; }
  public static get updateAdmin(): string { return '/updateadmin'; }
  public static get deleteAdminData(): string { return '/deleteAdmin'; }

  
}
