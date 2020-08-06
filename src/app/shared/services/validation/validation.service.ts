import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

   static getValidatorErrorMessage(validatorName, validatorValue, controlName){
    let config = {
      // required: `${controlName} is required`,
      required: controlName + ` is required`,
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  getValue(value){
    return value
  }

  
}
