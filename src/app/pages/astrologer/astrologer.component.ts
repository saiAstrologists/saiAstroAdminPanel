import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AstrologerService } from './astrologer.service';

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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



@Component({
  selector: 'app-astrologer',
  templateUrl: './astrologer.component.html',
  styleUrls: ['./astrologer.component.scss']
})
export class AstrologerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'email', 'status', 'action'];
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

    let data: any = [
      {
          "astrologistDetails": {
              "skills": [],
              "language": []
          },
          "email": "bijendrasingh9146@gmail.com",
          "_id": "5f1d8528411bc60dbd09ddb3",
          "name": "Bijendra Swami",
          "status": 'Rejected'
      },
      {
          "astrologistDetails": {
              "skills": [],
              "language": []
          },
          "email": "bijendrasingh9146@gmail.com",
          "_id": "5f255bb36507cd5af86a4102",
          "name": "Bijendra123",
          "status": 'Pending'
      },
      {
          "astrologistDetails": {
              "skills": [],
              "language": []
          },
          "email": "amitverma@gmail.com",
          "_id": "5f255bb36507cd5af86a4103",
          "name": "Amit Verma",
          "status": 'Approved'
      }
  ];


  // set is dropdown value
  data.forEach(list => {
    if(list.status == 'Pending'){
        list.isDropdown = true;
    }else {
      list.isDropdown = false;
    }
  })

  console.log(data, 'data');

    this.dataSource =  new MatTableDataSource(data);
    // this.dataSource =  new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator, 'paginator')
  }


  // filter data table start

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //filter data table end


  viewProfile(astrologerData){
    console.log(astrologerData, 'astrologer data');
    this.router.navigate(['/astrologer/astro-profile'])
  }


  statusChange(statusEvent, index){
    console.log(statusEvent, 'event');
    if(statusEvent && statusEvent.value){
      this.confirmationModal(statusEvent, index)
    }
  }

  confirmationModal(selectValue,index){
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
        let value = this.dataSource.data[index].status;
        console.log(value, 'value');
        if(value == 'Pending'){
          selectValue.source.writeValue(null);
        }else {
          selectValue.source.writeValue(value);
        }
        // selectValue.source.writeValue(null);
      }else if (modalResponse == 'yes') {
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
      console.log(response, 'response');
    })
  }

}
