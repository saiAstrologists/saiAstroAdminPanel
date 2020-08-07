import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-confirmation-modal',
  templateUrl: './admin-confirmation-modal.component.html',
  styleUrls: ['./admin-confirmation-modal.component.scss']
})
export class AdminConfirmationModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AdminConfirmationModalComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(type){
    this.dialogRef.close(type);
  }

}
