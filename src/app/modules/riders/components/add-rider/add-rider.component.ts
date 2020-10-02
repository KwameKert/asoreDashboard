import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DataloadService } from 'src/app/modules/shared/service/dataload.service';
import { DataService } from 'src/app/modules/shared/service/dataservice';
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
  selectedVehicle: string ;
  riderForm: FormGroup;
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _riderService: RiderService,  public dialogRef: MatDialogRef<AddRiderComponent>, private _vehicleService: VehicleService, @Inject(MAT_DIALOG_DATA) public data: any, private _dataService: DataloadService) { }

   ngOnInit(): void {
    this.loadActiveVehicles();
    if(this.data){
      this.loadEditForm(this.data)
    }else{
      this.loadRiderForm();
    }
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

  loadEditForm(data){
    this.selectedVehicle = '5f6036d4dd3953d79bb4b0c3';
    this.riderForm = this._fb.group({
    _id: data._id,  
    firstName: new FormControl(data.firstName, Validators.required),
    lastName: new FormControl(data.lastName, Validators.required),
    address: new FormControl(data.address, Validators.required),
    dob: new FormControl(this.covertTimestampToDate(data.dob), Validators.required),
    email: new FormControl(data.email, [Validators.required, Validators.email]),
    phone: new FormControl(data.phone, [Validators.required, Validators.maxLength(10)]),
    gender: new FormControl(data.gender, Validators.required),
    status: new FormControl(data.status, Validators.required),
    description: data.description,
    vehicle: data.vehicle._id,
    
    });

   
  }

 async saveRider(data: any, doc: any){
    try{
     this.ngxService.start()
   //  console.log(doc)
     let res : any = await this._dataService.uploadFile(doc).toPromise();
      //console.log(res.bodydata)
     if (res) {
      // this.loading.stop();
      data.documentUrl = res.body.data;
    }
    console.log(data)
     if(this.data){
      let resObject = await this._riderService.updateItem(data);
      this.dialogRef.close({event:true});
     }else{
      let resObject = await this._riderService.addItem(data);
      this.dialogRef.close({event:true});
     }
     

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

  covertTimestampToDate(date){
    var timestamp=new Date(date).getTime();
    var day=new Date(timestamp).getDate();
    var month=new Date(timestamp).getMonth()+1;
    var todate = day < 10 ? "0"+day : day
    var tomonth = month <10 ? "0"+month : month;
    var toyear=new Date(timestamp).getFullYear();
    return `${toyear}-${tomonth}-${todate}`;
   // console.log(original_date)
  }


}
