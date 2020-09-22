import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-document-slider',
  templateUrl: './document-slider.component.html',
  styleUrls: ['./document-slider.component.scss']
})
export class DocumentSliderComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public documentModalData: any,
    private dialogRef: MatDialogRef<DocumentSliderComponent>
  ) { }

  ngOnInit(): void {

    if(this.documentModalData){
      console.log(this.documentModalData);
      
    }
  }

  closeModal(type){
    this.dialogRef.close(type);
  }

}
