import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminLogin: FormGroup;
  viewForgetPswdSec: boolean = false;
  constructor() {

  }

  ngOnInit(): void {

    this.adminLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [])
    })
  }

  forgotPswdSec(){
    this.viewForgetPswdSec = !this.viewForgetPswdSec;

    this.adminLogin.reset();

    if(this.viewForgetPswdSec) {
      this.adminLogin.get('username').setValidators([]);
      this.adminLogin.get('password').setValidators([]);
      this.adminLogin.get('emailId').setValidators([Validators.required]);
    }else {
      this.adminLogin.get('username').setValidators([Validators.required]);
      this.adminLogin.get('password').setValidators([Validators.required]);
      this.adminLogin.get('emailId').setValidators([]);
    }
    this.adminLogin.get('username').updateValueAndValidity();
    this.adminLogin.get('password').updateValueAndValidity()
    this.adminLogin.get('emailId').updateValueAndValidity();

  }

}
