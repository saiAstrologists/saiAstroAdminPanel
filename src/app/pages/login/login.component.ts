import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/services/common/common.service';
import { LoginService } from './login.service';
import { AdminType } from '../../shared/constants/enums/enum.enum';
import { ValidationService } from '../../shared/services/validation/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminLogin: FormGroup;
  viewForgetPswdSec: boolean = false;
  viewResetPswdSec: boolean = false;
  isOtpFill: boolean = false;
  mobileMax = 10;
  otpMax = 6;
  constructor(
    private router : Router,
    private commonService: CommonService,
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {

    this.adminLogin = new FormGroup({
      username: new FormControl('', [Validators.required, ValidationService.mobileNoValidation]),
      password: new FormControl('', [Validators.required]),
      forgotMobileno: new FormControl('', []),
      otp: new FormControl('', []),
      resetMobileno: new FormControl('', []),
      resetPassword: new FormControl('', []),
      resetConfirmPassword: new FormControl('', [])
    });


    this.adminLogin.get('otp').disable();

  }

  forgotPswdSec(){
    this.viewForgetPswdSec = !this.viewForgetPswdSec;

    this.adminLogin.reset();

    if(this.viewForgetPswdSec) {
      this.adminLogin.get('otp').disable();

      this.adminLogin.get('username').setValidators([]);
      this.adminLogin.get('password').setValidators([]);
      this.adminLogin.get('forgotMobileno').setValidators([Validators.required, ValidationService.mobileNoValidation]);
      this.adminLogin.get('otp').setValidators([]);
    }else {
      this.adminLogin.get('username').setValidators([Validators.required, ValidationService.mobileNoValidation]);
      this.adminLogin.get('password').setValidators([Validators.required]);
      this.adminLogin.get('forgotMobileno').setValidators([]);
      this.adminLogin.get('otp').setValidators([]);
    }
    this.adminLogin.get('username').updateValueAndValidity();
    this.adminLogin.get('password').updateValueAndValidity()
    this.adminLogin.get('forgotMobileno').updateValueAndValidity();
    this.adminLogin.get('otp').updateValueAndValidity();

  }

  resetPswdSec(){
    this.viewResetPswdSec = !this.viewResetPswdSec;
    
    // this.adminLogin.reset();
    this.adminLogin.get('username').reset();
    this.adminLogin.get('password').reset();
    // this.adminLogin.get('resetMobileno').reset();
    this.adminLogin.get('resetPassword').reset();
    this.adminLogin.get('resetConfirmPassword').reset();

    if(this.viewResetPswdSec){
      this.adminLogin.get('username').setValidators([]);
      this.adminLogin.get('password').setValidators([]);
      this.adminLogin.get('resetMobileno').setValidators([Validators.required]);
      this.adminLogin.get('resetPassword').setValidators([Validators.required, ValidationService.passwordValidation]);
      this.adminLogin.get('resetConfirmPassword').setValidators([Validators.required, ValidationService.passwordValidation]);
      // this.adminLogin.get('resetConfirmPassword').setValidators([Validators.required, ValidationService.passwordValidation, ValidationService.confirmPswdValidaiton]);

    }else {
      this.adminLogin.get('username').setValidators([Validators.required, ValidationService.mobileNoValidation]);
      this.adminLogin.get('password').setValidators([Validators.required]);
      this.adminLogin.get('resetMobileno').setValidators([]);
      this.adminLogin.get('resetPassword').setValidators([]);
      this.adminLogin.get('resetConfirmPassword').setValidators([]);
    }

    this.adminLogin.get('username').updateValueAndValidity();
    this.adminLogin.get('password').updateValueAndValidity();
    this.adminLogin.get('resetMobileno').updateValueAndValidity();
    this.adminLogin.get('resetPassword').updateValueAndValidity();
    this.adminLogin.get('resetConfirmPassword').updateValueAndValidity();
  }


  submitForm(formData: any){
    if(formData.valid){

      let data = {
        contactNo: formData.value.username,
	      password: formData.value.password
      }

      this.loginService.loginUser(data).subscribe(response => {
        console.log(response, 'response'); 

        // if(response.message != ''){
        //   this.commonService.viewToaster(response.message);
        // }

        if(response && response.data && response.data.token){
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('user_role', JSON.stringify(response.data.userData))

          if(response.data.userData && response.data.userData.userType == AdminType.masterAdmin){
            sessionStorage.setItem('adminType', 'master');
          }else {
            sessionStorage.setItem('adminType', 'subadmin');
          }
          this.commonService.setUserLoginStatus(true);
          this.router.navigate(['/dashboard']);
        }        
      })

    }
  }


  forgotPassword(formData){
    if(formData && formData.valid && formData.value.forgotMobileno){
      let reqData = {
        contactNo: formData.value.forgotMobileno
      }
      this.loginService.forgotPassword(reqData).subscribe(response => {
        if(response && response.data && response.data.otp){
          this.isOtpFill = true;

          console.log(this.adminLogin, 'form');

          this.adminLogin.get('otp').enable();
          this.adminLogin.get('otp').setValidators([Validators.required]);
          this.adminLogin.get('otp').updateValueAndValidity();
          // this.adminLogin.get('otp').markAsPristine({onlySelf: false});
        }
      })
    }
   
  }


  verifyMobileOtp(formData){
    if(formData && formData.valid && formData.value.forgotMobileno && formData.value.otp){
      let reqData = {
        contactNo: formData.value.forgotMobileno,
	      otp : formData.value.otp
      }

      this.loginService.verifyMobotp(reqData).subscribe(response => {
        if(response && response.status == 200){
          console.log('verified');
          this.viewForgetPswdSec = false;

          // patch value
          this.adminLogin.patchValue({
            resetMobileno: formData.value.forgotMobileno
          });

          this.resetPswdSec();
        }
      })
    }
  }

  passwordResetCheck(event){
    console.log(event,'veen');
    // if(event.target.value != this.adminLogin.get('resetConfirmPassword').value){
    //   this.adminLogin.get('resetConfirmPassword').setValidators([Validators.required, ValidationService.passwordValidation, ValidationService.confirmPswdValidaiton]);
    //   this.adminLogin.get('resetConfirmPassword').updateValueAndValidity();
    // }
    this.adminLogin.get('resetConfirmPassword').setValidators([Validators.required, ValidationService.passwordValidation, ValidationService.confirmPswdValidaiton]);
      this.adminLogin.get('resetConfirmPassword').updateValueAndValidity();
  }

  confirmResetCheck(event){
    console.log(event,'veen');
    if(event.target.value != this.adminLogin.get('resetPassword').value){
      this.adminLogin.get('resetConfirmPassword').setValidators([Validators.required, ValidationService.passwordValidation, ValidationService.confirmPswdValidaiton]);
      this.adminLogin.get('resetConfirmPassword').updateValueAndValidity();
    }
  }


  setResetPassword(formData){
    if(formData && formData.valid){
      let reqData = {
        contactNo: formData.value.resetMobileno,
	      password: formData.value.resetConfirmPassword
      }

      this.loginService.resetLoginPassword(reqData).subscribe(response => {
        if(response && response.status == 200){
          this.viewResetPswdSec = true;
          this.resetPswdSec();
        }
      })

    }
  }
}
