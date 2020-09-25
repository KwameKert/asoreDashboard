import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AddVehicleComponent } from 'src/app/modules/vehicles/components/add-vehicle/add-vehicle.component';
import { VehicleService } from 'src/app/modules/vehicles/vehicle.service';

import { RiderService } from '../../rider.service';

@Component({
  selector: 'app-add-rider',
  templateUrl: './add-rider.component.html',
  styleUrls: ['./add-rider.component.scss']
})
export class AddRiderComponent implements OnInit {

  vehicles: any;
  riderForm: FormGroup;
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _riderService: RiderService,  public dialogRef: MatDialogRef<AddRiderComponent>, private _vehicleService: VehicleService, ) { }

  ngOnInit(): void {

    this.loadRiderForm();
    this.loadActiveVehicles();
  }

  loadRiderForm(){
    this.riderForm = this._fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      gender: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: '',
      vehicle: ''
    })
  }

 async saveRider(data: any){

    try{
     this.ngxService.start()

      let resObject = await this._riderService.addItem(data);
      this.dialogRef.close({event:true});

    }catch(error){
      console.error(error);
    }finally{
      this.ngxService.stop();
    }

  }

  async loadActiveVehicles(){
    try{
      this.ngxService.start()
      let resObject = await this._vehicleService.query({status: "active"});
      this.vehicles = resObject.data;

    }catch(error){
      console.error(error);
    }finally{
      this.ngxService.stop();
    }
  }


}
