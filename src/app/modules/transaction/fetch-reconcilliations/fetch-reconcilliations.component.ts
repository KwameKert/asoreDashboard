import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewReconcilliation(data){
    const dialogRef = this.dialog.open(ViewReconcilliationComponent, {
      width: '950px',
      height: '350px',
      data,
    });

    dialogRef.afterClosed().subscribe(
      (result) => {},
      (error) => {
        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    );
  }

  reconcileAmount(id: String){

  }

}
