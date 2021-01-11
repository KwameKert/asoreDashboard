import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from '../transaction.service';
import { ViewReconcilliationComponent } from '../view-reconcilliation/view-reconcilliation.component';

@Component({
  selector: 'app-fetch-reconcilliations',
  templateUrl: './fetch-reconcilliations.component.html',
  styleUrls: ['./fetch-reconcilliations.component.scss']
})
export class FetchReconcilliationsComponent implements OnInit {

  displayedColumns: string[] = [
    'fullname',
    'status',
    'amount',
    'created_on',
    'actions'
  ];
  startDate: any = null;
  endDate: any = null;
  originalTransaction = [];
  isLoading: boolean = false;
  dataSource: MatTableDataSource<any>;
 

  isEmpty: boolean = false;

  constructor(private _transactionService: TransactionService, public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadReconcilliations();
  }

  async loadReconcilliations() {
    try {
      this.isLoading = true;
      let transactions = await this._transactionService.fetchReconcilliations();
      this.originalTransaction = transactions.data;
      let formatData = this.formatData(transactions.data);
      console.log(formatData)
      this.dataSource = new MatTableDataSource(formatData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (error) {
      this.isEmpty = true;
    } finally {
      this.isLoading = false;
    }
  }

  applyFilter(event: Event) {
   
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue.trim().toLowerCase())
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewReconcilliation(data){
    let obj = this.originalTransaction.find(o => o._id === data._id);
    console.log("data sending data", obj)
    const dialogRef = this.dialog.open(ViewReconcilliationComponent, {
      width: '950px',
      height: '350px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe(
      (result) => {},
      (error) => {

      }
    );
  }

  formatData(data){
    let reconcilliationsList = [];
    data.forEach((item)=>{
      let recon = {
        _id: item._id,
        fullName: item.rider.firstName +" "+item.rider.lastName,
        status: item.status, 
        amount: item.amount, 
        createdAt: item.createdAt
      }
      reconcilliationsList.push(recon);
    })
    return reconcilliationsList;
  }

  reconcileAmount(data: any){
    console.log("Im here", data)
    const dialogRef = this.dialog.open(ReconcilePayment, {
      width: '450px',
      height: '250px',
      data,
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        this.loadReconcilliations();

      },
      (error) => {

      }
    );
  }


  async searchRange(){
    if(this.startDate){
        try{
          let startDate = typeof(this.startDate) == 'string' ? this.startDate : new Date(2012, 7, 14);
          let endDate = typeof(this.endDate) == 'string' ? this.endDate : Date.now();
          let transactions = await this._transactionService.filterByRange(startDate, endDate);
          this.originalTransaction = transactions.data;
          let formatData = this.formatData(transactions.data);
          console.log(formatData)
          this.dataSource = new MatTableDataSource(formatData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }catch(e){

        }
    }
  }

}



@Component({
  selector: 'reconcile-payment',
  templateUrl: 'reconcile-payment.html',
})
export class ReconcilePayment {

  constructor(
    private _transactionService: TransactionService,
    public dialogRef: MatDialogRef<ReconcilePayment>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(): void {
    this.dialogRef.close();
  }

  async  pay(){
    let data ={
      id: this.data._id   
    }
    let response  = await this._transactionService.reconcilePayment(data);
    if(response){
      this.dialogRef.close();
    }

  }

}
