import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-fetch-transactions',
  templateUrl: './fetch-transactions.component.html',
  styleUrls: ['./fetch-transactions.component.scss']
})
export class FetchTransactionsComponent implements OnInit {

  displayedColumns: string[] = [
    'order',
    'amount',
    'currency',
    'created_on',
    'actions'
  ];
  isLoading: boolean = false;
  dataSource: MatTableDataSource<any>;

  isEmpty: boolean = false;

  constructor(private _transactionService: TransactionService, public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadTransactions();
  }

  async loadTransactions() {
    try {
      this.isLoading = true;
      let transactions = await this._transactionService.fetchTransactions();
      this.dataSource = new MatTableDataSource(transactions.data);
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
    // const dialogRef = this.dialog.open(ViewReconcilliationComponent, {
    //   width: '950px',
    //   height: '350px',
    //   data,
    // });

    // dialogRef.afterClosed().subscribe(
    //   (result) => {},
    //   (error) => {

    //   }
    // );
  }

}
