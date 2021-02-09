import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { AdminService } from '../../admin.service';
import { ViewAdminComponent } from '../view-admin/view-admin.component';
import { AddAdminComponent } from '../add-admin/add-admin.component';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  displayedColumns: any = ['username', 'email', 'role', 'actions']
  isLoading: boolean = true;
  isEmpty: boolean = false;
  dataSource: any ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _adminService: AdminService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  async  loadAllUsers(){

    try{
      this.isLoading = true;
      let resObject =  await this._adminService.fetchAllAdmin();
      console.log(resObject)
      if(resObject){
        this.dataSource = resObject.data;
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator;
      }
      
    }catch(error){
      console.error(error)
    }finally{
      this.isLoading = false;
    }
  
  }

  addAdmin(){
    const dialogRef = this.dialog.open(AddAdminComponent, {
      width: '800px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllUsers();
    }, error=>{
     
    });
  }

  editAdmin(data: any){
    const dialogRef = this.dialog.open(AddAdminComponent, {
      width: '800px',
      height: '400px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllUsers();
    }, error=>{
     
    });
  }

  viewAdmin(admin: any){
    const dialogRef = this.dialog.open(ViewAdminComponent, {
      width: '600px',
      height: '300px',
      data: admin
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
     
    });
  }

  deleteAdmin(_id: string){
  
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '650px',
      height: '280px',
      data: {model: "user/admin", _id, word: "DELETE admin"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this.loadAllUsers()
      }else{
        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    });

  }

}
