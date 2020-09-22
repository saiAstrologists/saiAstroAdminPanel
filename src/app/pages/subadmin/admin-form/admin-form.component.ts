import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../../shared/services/validation/validation.service';
import { SubadminService } from '../subadmin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
  adminForm: FormGroup;
  title: string = '';
  mobileMaxLength =  10;
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private dialogRef: MatDialogRef<AdminFormComponent>,
    private subAdminService: SubadminService
  ) { }

  ngOnInit(): void {
    console.log(this.modalData, 'modal data');

    this.adminForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, ValidationService.emailValidation]),
      // status: new FormControl('', Validators.required),
      contactNo: new FormControl('', [Validators.required, ValidationService.mobileNoValidation]),
      password: new FormControl('', [Validators.required, ValidationService.passwordValidation]),
      _id: new FormControl('')
    });

    if(this.modalData){
      if(this.modalData.modelType == 'add'){
        this.title = "Create";
      }else if(this.modalData.modelType == 'edit' && this.modalData.adminData){
        this.title = "Edit";
        this.adminForm.patchValue({
          name: this.modalData.adminData.name,
          email: this.modalData.adminData.email,
          _id: this.modalData.adminData._id,
          contactNo: this.modalData.adminData.contactNo,
        });

        this.adminForm.get('password').setValidators([ValidationService.passwordValidation]);
        this.adminForm.get('password').updateValueAndValidity();
      }
    }

  }



  // generate random alpha numeric string
  randomString() {
    let length = 24;
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}


  submitForm(formData){
    if(formData.valid) {

      // if(this.modalData.modelType == 'add') {
      //   formData.value._id = this.randomString();
      // }

      let reqData = {
        name: formData.value.name,
        contactNo: formData.value.contactNo,
        email: formData.value.email,
        password: formData.value.password
      }
      this.subAdminService.createAdmin(reqData).subscribe(response => {
        if(response && response.data){          
            let data = {
              type: this.modalData.modelType,
              data: {
                name: response.data.name,
                contactNo: response.data.contactNo,
                email: response.data.email,
                password: response.data.password,
                _id: response.data._id
              }
            }
            console.log(formData, 'formData');
            this.dialogRef.close(data);
        }
      })

    }
  }

  updateForm(formData){
    if(formData.valid){
      let reqData = {
        id: formData.value._id,
        email: formData.value.email,
        name: formData.value.name,
        contactNo: formData.value.contactNo
      }

      this.subAdminService.updateAdminData(reqData).subscribe(response => {
        if(response && response.data) {
          let data = {
            type: this.modalData.modelType,
            data: formData.value
          }
          this.dialogRef.close(data);
        }
      })
    }
  }
  

}
