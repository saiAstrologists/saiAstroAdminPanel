import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
  adminForm: FormGroup;
  title: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private dialogRef: MatDialogRef<AdminFormComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.modalData, 'modal data');

    this.adminForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      _id: new FormControl('')
    });

    if(this.modalData){
      if(this.modalData.modelType == 'add'){
        this.title = "Add";
      }else if(this.modalData.modelType == 'edit' && this.modalData.adminData){
        this.title = "Edit";
        this.adminForm.patchValue({
          name: this.modalData.adminData.name,
          email: this.modalData.adminData.email,
          status: this.modalData.adminData.status,
          _id: this.modalData.adminData._id
        })
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

      if(this.modalData.modelType == 'add') {
        formData.value._id = this.randomString();
      }


      let data = {
        type: this.modalData.modelType,
        data: formData.value
      }
      console.log(formData, 'formData');
      this.dialogRef.close(data);
    }
  }
  

}
