import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-astrologer-report-view',
  templateUrl: './astrologer-report-view.component.html',
  styleUrls: ['./astrologer-report-view.component.scss']
})
export class AstrologerReportViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public reportModalData: any,
  private dialogRef: MatDialogRef<AstrologerReportViewComponent>) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.reportModalData, 'report modal data');
  }

}
