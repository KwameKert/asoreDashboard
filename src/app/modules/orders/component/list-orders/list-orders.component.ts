import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { OrderService } from '../../order.service';
import { ViewOrderComponent } from '../view-order/view-order.component';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  displayedColumns: Array<string> = ['item','customer','status','created_on', 'actions'];
  dataSource: MatTableDataSource<any> = null;
  isLoading: boolean = false;
  isEmpty: boolean = false;

  constructor(private _orderService: OrderService,  private ngxService: NgxUiLoaderService, public dialog: MatDialog, private router: Router) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.loadOrders();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async loadOrders(){
    try{
      this.isLoading = true
      let response = await this._orderService.fetchAll();
      if(response && response.data.length != 0){
        let result = response.data;
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;

      }else{
        this.isEmpty = true;
      }
    }catch(error){

    }finally{
      this.isLoading = false;
    }
  }

  viewOrder(_id: String){
    console.log(_id);
    this.router.navigate(['/admin/order/',_id]);

    // const dialogRef = this.dialog.open(ViewOrderComponent, {
    //   width: '800px',
    //   height: '400px',
    //   data
    // });

    // dialogRef.afterClosed().subscribe(result => {
      
    // }, error=>{
    //   // this._toastr.error("Oops an error. 🥺","",{
    //   //   timeOut:2000
    //   // })
    // });
  }

  deleteOrder(id: string){

  }
}
