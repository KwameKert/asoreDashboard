import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { CustomersService } from '../../customers.service';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  isLoading: boolean = false; 
  isEmpty: boolean = false;
  dataSource: any ;
  displayedColumns: any = ['username', 'email', 'createdAt','status', 'actions']
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _customerService: CustomersService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  async loadCustomers(){
      try{
        let response = await this._customerService.query({status: true});
        
        if(response && response.data.length !=0){
          let result = response.data;
          this.dataSource = result
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
      width: '600px',
      height: '300px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
     
    });
  }

  deleteCustomer(id: string){

  }
}
