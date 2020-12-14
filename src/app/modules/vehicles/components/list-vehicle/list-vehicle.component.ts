import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { VehicleService } from '../../vehicle.service';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from '../edit-vehicle/edit-vehicle.component';
import { ViewVehicleComponent } from '../view-vehicle/view-vehicle.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss'],
})
export class ListVehicleComponent implements OnInit {
  displayedColumns: Array<string> = [
    'model',
    'brand',
    'status',
    'mileage',
    'created_on',
    'actions',
  ];
  isLoading: boolean = true;
  dataSource: MatTableDataSource<any> = null;

  constructor(
    private _vehicleService: VehicleService,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.loadVehicles();
  }

  async loadVehicles() {
    try {
      this.isLoading = true;
      let resObj = await this._vehicleService.fetchVehicles('live');
      this.dataSource = new MatTableDataSource(resObj.data);
     // console.log(resObj.data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteVehicle(_id: Number) {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '600px',
      height: '270px',
      data: { model: 'vehicle', _id, word: 'DELETE vehicle' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event) {
        this.loadVehicles();
      } else {
      }
    });
  }

  editVehicle(vehicle) {
    const dialogRef = this.dialog.open(EditVehicleComponent, {
      width: '820px',
      height: '520px',
      data: vehicle,
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result.event) {
          this.loadVehicles();
        }
      },
      (error) => {}
    );
  }

  addVehicle() {
    const dialogRef = this.dialog.open(AddVehicleComponent, {
      width: '820px',
      height: '70%',
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result.event) {
          //  this._toastr.success("Vehicle added successfully", "Success  😊", {  timeOut:2000});
          this.loadVehicles();
        }
      },
      (error) => {
        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    );
  }

  viewVehicle(vehicle) {
    const dialogRef = this.dialog.open(ViewVehicleComponent, {
      width: '800px',
      height: '50%',
      data: vehicle,
    });

    dialogRef.afterClosed().subscribe(
      (result) => {},
      (error) => {}
    );
  }
}
