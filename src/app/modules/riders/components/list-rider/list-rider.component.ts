import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { RiderService } from '../../rider.service';
import { AddRiderComponent } from '../add-rider/add-rider.component';
import { ViewRiderComponent } from '../view-rider/view-rider.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { VerifyRiderComponent } from '../verify-rider/verify-rider.component';
import { UpdateRiderStatusComponent } from '../update-rider-status/update-rider-status.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-list-rider',
  templateUrl: './list-rider.component.html',
  styleUrls: ['./list-rider.component.scss'],
})
export class ListRiderComponent implements OnInit {
  displayedColumns: string[] = [
    'full name',
    'address',
    'status',
    'created_on',
    'stars',
    'verify',
    'actions',
  ];
  isLoading: boolean = false;
  dataSource: MatTableDataSource<any>;

  isEmpty: boolean = false;

  constructor(private _riderService: RiderService, public dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadRiders();
  }

  async loadRiders() {
    try {
      this.isLoading = true;
      let riders = await this._riderService.query({ status: 'live' });
      this.dataSource = new MatTableDataSource(riders.data);
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

  deleteRider(_id: String) {
    let data = {
      model: 'rider',
      _id,
      word: 'DELETe rider',
    };
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '650px',
      height: '280px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event) {
        this.loadRiders();
      } else {
      }
    });
  }

  viewRider(data: any) {
    const dialogRef = this.dialog.open(ViewRiderComponent, {
      width: '950px',
      height: '500px',
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

  verifyRider(_id: String, isVerified: boolean){
    let data = {
      _id,
      isVerified,
      word: 'rider verficatioN',
    };
    const dialogRef = this.dialog.open(VerifyRiderComponent, {
      width: '600px',
      height: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event) {
        this.loadRiders();
      } else {
      }
    });
  }
  updateRiderStatus(_id: String, status: String){
    let data = {
      _id,
      status,
      word: 'update rideR',
    };
    const dialogRef = this.dialog.open(UpdateRiderStatusComponent, {
      width: '600px',
      height: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event) {
        this.loadRiders();
      } else {
      }
    });
  }

 
}


