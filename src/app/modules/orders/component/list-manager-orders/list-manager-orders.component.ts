import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-list-manager-orders',
  templateUrl: './list-manager-orders.component.html',
  styleUrls: ['./list-manager-orders.component.scss']
})
export class ListManagerOrdersComponent implements OnInit {

  displayedColumns: Array<string> = ['item','dropOff','pickUp','created_on', 'status','actions'];
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
      let response = await this._orderService.fetchManagerOrders();
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
    this.router.navigate(['/manager/order/',_id]);
  }

  deleteOrder(id: string){

  }
}
