import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { RiderService } from '../../rider.service';
import { AddRiderComponent } from '../add-rider/add-rider.component';
import { ViewRiderComponent } from '../view-rider/view-rider.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { VerifyRiderComponent } from '../verify-rider/verify-rider.component';

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
    'address',
    'status',
    'full name',
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

  deleteRider(_id: Number) {
    let data = {
      model: 'rider',
      _id,
      word: 'DELETe rider',
    };
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
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

  verifyRider(_id: String){
    let data = {
      _id,
      word: 'Verify rider',
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
}



// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//   };
// }
