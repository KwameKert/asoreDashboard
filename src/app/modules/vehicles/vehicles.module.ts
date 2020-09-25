import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddVehicleComponent, EditVehicleComponent, ListVehicleComponent, ViewVehicleComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListVehicleComponent
  ]
})
export class VehiclesModule { }
