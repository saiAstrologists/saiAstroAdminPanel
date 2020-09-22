import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminConfirmationModalComponent } from './admin-confirmation-modal/admin-confirmation-modal.component';
import { SubadminService } from './subadmin.service';

@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.scss']
})
export class SubadminComponent implements OnInit {

  
  displayedColumns: string[] = ['position', 'name', 'email', 'mobile', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private subAdminService: SubadminService
  ) { }

  ngOnInit(): void {

    this.getAdminList();
  //   let data = [
  //     {
  //         "email": "bijendrasingh9146@gmail.com",
  //         "_id": "5f1d8528411bc60dbd09ddb3",
  //         "name": "Bijendra Swami",
  //         "contactNo": '8655568110',
  //         "password": 'gghjg'
  //     },
  //     {
  //         "email": "bijendrasingh9146@gmail.com",
  //         "_id": "5f255bb36507cd5af86a4102",
  //         "name": "Bijendra123",
  //         "contactNo": '7021385449',
  //         "password": 'gghjg'
  //     },
  // ];
    
  }


   // filter data table start

   applyAdminFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //filter data table end

  // add admin row data
  addAdminData(addData){
    this.dataSource.data.push({
      "email": addData.email,
      "_id": addData._id,
      "name": addData.name,
      "contactNo": addData.contactNo,
  });

  // this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.filter = "";
  }

  deleteAdminData(rowData,index){

    const dialogConfirmation = this.dialog.open(AdminConfirmationModalComponent, {
      width: '400px'
    })

    dialogConfirmation.afterClosed().subscribe(confirmationModalResponse => {
      if(confirmationModalResponse == 'yes') {

        if(rowData._id){
          let reqData = {
            adminId: rowData._id
          }
          this.subAdminService.deleteAdmin(reqData).subscribe(response => {
            console.log(response, 'response');
            this.dataSource.data.splice(index,1);
            this.dataSource.filter = "";
          });
        }     
        
      }else {
        
      }
    })

    
  }

  editAdminData(rowData){
    this.dataSource.data.filter((list) => {
      if(list._id == rowData._id) {
        list.name =  rowData.name;
        list.email = rowData.email;
        list.contactNo = rowData.contactNo;
      }
    });

    this.dataSource.filter = "";
  }

  openAdminModal(rowData, type){
    const dialogRef = this.dialog.open(AdminFormComponent, {
      width: '500px',
      data: {
        modelType : type,
        adminData: rowData
      }
    });

    dialogRef.afterClosed().subscribe(modalResponse => {
      console.log('The dialog was closed', modalResponse);
      if(modalResponse && modalResponse.type) {
        if(modalResponse.type == 'add'){
          this.addAdminData(modalResponse.data);
        }else if(modalResponse.type == 'edit'){
          this.editAdminData(modalResponse.data);
        }
      }
    });
  }


  getAdminList(){
    this.subAdminService.getAdmin().subscribe(response => {
      if(response && response.data){
        console.log(response, 'response');
        this.dataSource =  new MatTableDataSource(response.data);
        this.dataSource.paginator = this.paginator; 
      }
    })
  }

}
