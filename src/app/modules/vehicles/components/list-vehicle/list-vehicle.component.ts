import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { VehicleService } from '../../vehicle.service';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from '../edit-vehicle/edit-vehicle.component';
import { ViewVehicleComponent } from '../view-vehicle/view-vehicle.component';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  displayedColumns: Array<string> = ['model', 'brand', 'status','mileage', 'created_on', 'actions'];
  isLoading: boolean = true;
  dataSource: any = null;
  
  constructor( private _vehicleService: VehicleService,  public dialog: MatDialog,  ) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit(): void {
    this.loadVehicles();
  }


 async loadVehicles(){

    try{
      this.isLoading = true;
      let resObj = await this._vehicleService.query({status: "live"});
      this.dataSource = resObj.data;
      console.log(resObj.data)
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;

    }catch(error){
      console.error(error)
    }
 


    // this._vehicleService.listVehicles().subscribe((data)=>{
    //   if(data.data == null){
    //     this._toastr.info("No vehicles found. 🥺","",{
    //       timeOut:2000
    //     })
    //   }else{
    //     this.dataSource = data.data;
    //     this.dataSource.paginator = this.paginator;
    //   }
      
    //   this.isLoading = false;
    // }, error=>{

    // })
  }



  deleteVehicle(id: Number){
    let data = {
      module: 'users',
      id
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        
        // this._snackBar.open("User Deleted 🙂  ", "", {
        //   duration: 2000,
        // });
      }else{

        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    });
  }

  editVehicle(vehicle){
    const dialogRef = this.dialog.open(EditVehicleComponent, {
      width: '820px',
      height: '520px',
      data: vehicle
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
       this.loadVehicles()
      }
    }, error=>{
    
    });
  }

 
  addVehicle(){

    const dialogRef = this.dialog.open(AddVehicleComponent, {
      width: '820px',
      height: '520px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
      //  this._toastr.success("Vehicle added successfully", "Success  😊", {  timeOut:2000});
       this.loadVehicles()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
     // })
    });

  }

  viewVehicle(vehicle){
    const dialogRef = this.dialog.open(ViewVehicleComponent, {
      width: '800px',
      height: '420px',
      data: vehicle
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
     
    });

  }

}
