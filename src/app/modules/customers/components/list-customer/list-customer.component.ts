import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { CustomersService } from '../../customers.service';
import { AddMemberComponent } from '../add-member/add-member.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  isLoading: boolean = false; 
  isEmpty: boolean = false;
  dataSource: MatTableDataSource<any> = null;
  displayedColumns: any = ['fullName', 'email','maritalStatus','occupation', 'createdAt', 'actions']
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _customerService: CustomersService,  public dialog: MatDialog, private _router: Router) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  async loadCustomers(){
      try{
        let response = await this._customerService.fetchAll();
        
        if(response && response.data.length !=0){
          let result = response.data;
          this.dataSource = new MatTableDataSource(result);
          //console.log(this.dataSource)
          this.dataSource.paginator = this.paginator;
          
          console.log(result)
        }else{
          this.isEmpty = true
        }

      }catch(error){
        console.error(error)
      }finally{
        this.isLoading = false;
      }
  }


  viewCustomer(data: any){
    const dialogRef = this.dialog.open(ViewCustomerComponent, {
      width: '800px',
      height: '430px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
     
    });
  }

  deleteCustomer(_id: string){
  
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '650px',
      height: '280px',
      data: {model: "member", _id, word: "DELETE member"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this.loadCustomers()
      }else{
        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    });

  }

  addMember(){
   this._router.navigate(['/admin/add-member'])
  }
  editMember(id){
   this._router.navigate([`/admin/add-member/${id}`])
  }
}
