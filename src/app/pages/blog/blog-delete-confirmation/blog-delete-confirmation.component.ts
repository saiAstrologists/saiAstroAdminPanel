import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-delete-confirmation',
  templateUrl: './blog-delete-confirmation.component.html',
  styleUrls: ['./blog-delete-confirmation.component.scss']
})
export class BlogDeleteConfirmationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BlogDeleteConfirmationComponent>) { }

  ngOnInit(): void {
  }

  closeModal(type){
    this.dialogRef.close(type);
  }
}
