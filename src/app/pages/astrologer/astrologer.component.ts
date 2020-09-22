import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AstrologerService } from './astrologer.service';
import { JsonPipe } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


interface StatusTypeDto {
  name: string;
  id: number;
}


@Component({
  selector: 'app-astrologer',
  templateUrl: './astrologer.component.html',
  styleUrls: ['./astrologer.component.scss']
})
export class AstrologerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'email','mobile', 'status', 'action'];
  dataSource = new MatTableDataSource<any>();

  statusTypeList : StatusTypeDto[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  constructor(
    private router : Router,
    private dialog: MatDialog,
    private astrologerService: AstrologerService
  ) { }

  ngOnInit(): void {
    this.getAstrologersList();

    this.statusTypeList = [
     {
      id: 1,
      name: 'Approve'
     },
     {
       id: 2,
       name: 'Reject'
     }
      
    ]

  //   let data: any = [
  //     {
  //         "astrologistDetails": {
  //             "skills": [],
  //             "language": []
  //         },
  //         "email": "bijendrasingh9146@gmail.com",
  //         "_id": "5f1d8528411bc60dbd09ddb3",
  //         "name": "Bijendra Swami",
  //         "status": 'Rejected'
  //     },
  //     {
  //         "astrologistDetails": {
  //             "skills": [],
  //             "language": []
  //         },
  //         "email": "bijendrasingh9146@gmail.com",
  //         "_id": "5f255bb36507cd5af86a4102",
  //         "name": "Bijendra123",
  //         "status": 'Pending'
  //     },
  //     {
  //         "astrologistDetails": {
  //             "skills": [],
  //             "language": []
  //         },
  //         "email": "amitverma@gmail.com",
  //         "_id": "5f255bb36507cd5af86a4103",
  //         "name": "Amit Verma",
  //         "status": 'Approved'
  //     }
  // ];



    // console.log(this.paginator, 'paginator')
  }


  // filter data table start

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //filter data table end


  viewProfile(astrologerData){
    console.log(astrologerData, 'astrologer data');
    this.router.navigate(['/astrologer/astro-profile', astrologerData._id])
  }


  statusChange(statusEvent, index, customerData){
    console.log(statusEvent, 'event');
    if(statusEvent && statusEvent.value){
      this.confirmationModal(statusEvent, index, customerData)
    }
  }

  confirmationModal(selectValue,index, customerData){
    console.log(selectValue, 'select value');
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px',
      // data: {
      //   modelType : type,
      //   adminData: rowData
      // }
    });

    dialogRef.afterClosed().subscribe(modalResponse => {
      console.log(modalResponse, 'modal response');
      if(modalResponse == 'no'){
        let value = this.dataSource.data[index].isApplicationAccepted;
        console.log(value, 'value');
        if(value == null){
          selectValue.source.writeValue(null);
        }else {
          selectValue.source.writeValue(value);
        }
        // selectValue.source.writeValue(null);
      }else if (modalResponse == 'yes') {
        if(sessionStorage.getItem('user_role')){
          let adminUserValue = JSON.parse(sessionStorage.getItem('user_role'));
          if(adminUserValue._id){
            let reqData = {
              userId: customerData._id,
              approve: selectValue && selectValue.value == 'Approve' ? true: false,
              adminId: adminUserValue._id
            }


            this.astrologerService.acceptRejectApp(reqData).subscribe(response => {
              if(response && response.status == 200 && response.data){
                console.log(response, 'response');
              }
            })
          }
        }

        
        
        
        this.dataSource.data.filter((list, i) => {
          if(index == i ){
            list.status = selectValue.value
          }
        });
        this.dataSource.filter = "";

        // call service
      }
    })
  }

  getAstrologersList(){
    this.astrologerService.getAstrologers().subscribe(response => {
      if(response && response.status == 200 && response.data){
          // set is dropdown value
            // response.data.forEach(list => {
            //   if(list.isApplicationAccepted == null){
            //       list.isDropdown = true;
            //   }else {
            //     list.isDropdown = false;
            //   }
            // })

            console.log(response.data, 'data');

              this.dataSource =  new MatTableDataSource(response.data);
              // this.dataSource =  new MatTableDataSource(ELEMENT_DATA);
              this.dataSource.paginator = this.paginator;
      }
    })
  }

}
