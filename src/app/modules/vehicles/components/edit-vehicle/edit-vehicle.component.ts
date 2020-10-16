import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  
  vehicleForm: FormGroup;
  years: Array<object> = [
    {value:2005 , viewValue: '2005'},
    {value:2006 , viewValue: '2006'},
    {value:2007 , viewValue: '2007'},
    {value:2008 , viewValue: '2008'},
    {value:2009 , viewValue: '2009'},
    {value:2010 , viewValue: '2010'},
    {value:2011 , viewValue: '2011'},
    {value:2012 , viewValue: '2012'},
    {value:2013 , viewValue: '2013'},
    {value:2014 , viewValue: '2014'},
    {value:2015 , viewValue: '2015'},
    {value:2016 , viewValue: '2016'},
    {value:2017 , viewValue: '2017'},
    {value:2018 , viewValue: '2018'},
    {value:2019 , viewValue: '2019'},
  ]

  fuels: Array<object> = [
    {value:'petrol' , viewValue: 'Petrol'},
    {value:'disel' , viewValue: 'Disel'},
    {value:'kerosene' , viewValue: 'Kerosene'},
  ]

  
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _vehicleService: VehicleService,  public dialogRef: MatDialogRef<EditVehicleComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadVehicleForm();
    this.editForm();
    this.dialogRef.updatePosition({top: '150px'})
  }

  editForm(): void {
    this.vehicleForm.patchValue({
    _id: this.data._id,
     model: this.data.model,
     brand: this.data.brand,
     capacity: this.data.capacity,
     mileage: this.data.mileage,
     year: this.data.year,
     color: this.data.color,
     fuelType: this.data.fuelType,
     status: this.data.status,
     description: this.data.description
    })
    
  }


  loadVehicleForm(){
    this.vehicleForm = this._fb.group({
      _id: '',
      model: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      mileage: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      fuelType: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: new FormControl(''),
    })
  }

async  saveVehicle(){
    
    try{
      this.ngxService.start()

      let resObject = await this._vehicleService.updateItem(this.vehicleForm.value);
      this.dialogRef.close({event:true});

    }catch(error){
      console.error(error);
    }finally{
      this.ngxService.stop();
    }

  }

}
