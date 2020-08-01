import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router : Router
  ) { }


  getToken(){
    return sessionStorage.getItem('token');
  }

  isUserAuthenticate(){
    if(sessionStorage.getItem('token') && sessionStorage.getItem('token') != ''){
      return true;
    }
    return false;
  }


  getUserRole(){
    if(sessionStorage.getItem('userRole')){
      return sessionStorage.getItem('userRole');
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
