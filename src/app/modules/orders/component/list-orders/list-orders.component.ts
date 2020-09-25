import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
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
  dataSource: any = null;
  isLoading: boolean = false;
  isEmpty: boolean = false;

  constructor(private _orderService: OrderService,  private ngxService: NgxUiLoaderService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.loadOrders();
  }


  async loadOrders(){
    try{
      this.isLoading = true
      let response = await this._orderService.fetchAll();
      if(response && response.data.length != 0){
        let result = response.data;
        this.dataSource = result;
        this.dataSource.paginator = this.paginator;

      }else{
        this.isEmpty = true;
      }
    }catch(error){

    }finally{
      this.isLoading = false;
    }
  }

  viewOrder(data: any){
    const dialogRef = this.dialog.open(ViewOrderComponent, {
      width: '800px',
      height: '400px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }

  deleteOrder(id: string){

  }
}
