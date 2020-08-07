import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(type){
    this.dialogRef.close(type);
  }

}
