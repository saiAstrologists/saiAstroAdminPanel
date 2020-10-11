import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AstrologerService } from '../astrologer.service';
import { MatDialog } from '@angular/material/dialog';
import { DocumentSliderComponent } from '../document-slider/document-slider.component';
import { AstrologerReportViewComponent } from '../astrologer-report-view/astrologer-report-view.component';

@Component({
  selector: 'app-astrologer-profile',
  templateUrl: './astrologer-profile.component.html',
  styleUrls: ['./astrologer-profile.component.scss']
})
export class AstrologerProfileComponent implements OnInit {
  astrologerData: any;
  reportList: any = [];
  

  constructor(
    private activeRoute: ActivatedRoute,
    private astrologerService: AstrologerService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    console.log(this.activeRoute, 'activate');
    this.activeRoute.params.subscribe(paramList => {
      console.log(paramList, 'parameter');
      if(paramList && paramList.id){
        this.getAstrologerProfileDetail(paramList.id);
      }
      
    });



    this.reportList = [
      {
        reportQts: 'lorem ipsum testing text qts',
        reportAns: 'just check details testing again',
        qtsDate: '11/10/2020',
      },
      {
        reportQts: 'lorem ipsum testing text qts',
        reportAns: 'just check details testing again',
        qtsDate: '11/10/2020',
      }
    ]
    
  }

  getAstrologerProfileDetail(id){
    this.astrologerService.getAstrologerProfile(id).subscribe(response => {
      console.log(response, 'response'); 
      if(response && response.status == 200 && response.data){
        this.astrologerData = response.data
        if(this.astrologerData.personalDetails && this.astrologerData.personalDetails.dob){
          let setDobValue = new Date(this.astrologerData.personalDetails.dob);
          this.astrologerData.personalDetails.dob = setDobValue.getDate() +'/'+(setDobValue.getMonth() + 1)+'/'+setDobValue.getFullYear();

          // // create document list
          this.astrologerData.personalDetails['documents'] = [];
          this.astrologerData.personalDetails['documents'].push(this.astrologerData.personalDetails.idProof);
          // this.astrologerData.personalDetails['documents'].push('https://astrofiledata.s3.ap-south-1.amazonaws.com/Screenshot%20%281%29.png');
          // console.log(this.astrologerData.personalDetails, 'docm');
        }
      }
    })
  }

  viewDocuments(index){
    const dialogRef = this.dialog.open(DocumentSliderComponent, {
      width: '900px',
      panelClass: 'document-slider',
      data: {
        index : index,
        documentsList: this.astrologerData.personalDetails.documents
      }
    });
    dialogRef.afterClosed().subscribe(modalRes => {
      console.log(modalRes, 'modal res');
    })
  }

  reportInfoView(reportData){
    const dialog = this.dialog.open(AstrologerReportViewComponent, {
      width: '45vw',
      panelClass: 'report-main-view',
      data: reportData
    });

    dialog.afterClosed().subscribe(modelResponse => {
      console.log(modelResponse, 'response');
      
    })
  }

}
