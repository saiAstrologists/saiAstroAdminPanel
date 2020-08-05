import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.scss']
})
export class SubadminComponent implements OnInit {

  
  displayedColumns: string[] = ['position', 'name', 'email', 'status', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    let data = [
      {
          "astrologistDetails": {
              "skills": [],
              "language": []
          },
          "email": "bijendrasingh9146@gmail.com",
          "_id": "5f1d8528411bc60dbd09ddb3",
          "name": "Bijendra Swami",
          "status": 'Active'
      },
      {
          "astrologistDetails": {
              "skills": [],
              "language": []
          },
          "email": "bijendrasingh9146@gmail.com",
          "_id": "5f255bb36507cd5af86a4102",
          "name": "Bijendra123",
          "status": 'Active'
      },
      {
          "astrologistDetails": {
              "skills": [],
              "language": []
          },
          "email": "amitverma@gmail.com",
          "_id": "5f255bb36507cd5af86a4103",
          "name": "Amit Verma",
          "status": 'Active'
      }
  ];
    this.dataSource =  new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }


   // filter data table start

   applyAdminFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //filter data table end

  // add admin row data
  addAdminData(){
    this.dataSource.data.push({
      "astrologistDetails": {
          "skills": [],
          "language": []
      },
      "email": "verma@gmail.com",
      "_id": "5f255bb36507cd5af86a4103",
      "name": "Verma Karma",
      "status": 'Active'
  });

  // this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.filter = "";
  }

  deleteAdminData(rowData,index){
    this.dataSource.data.splice(index,1);
    this.dataSource.filter = "";
  }

  editAdminData(rowData, index){
    this.dataSource.data.filter((list, i) => {
      if(i == index) {
        rowData.name = "edit";
        list = rowData;
      }
    });

    this.dataSource.filter = "";
  }

}
