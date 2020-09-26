import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRiderComponent } from './components/add-rider/add-rider.component';
import { ListRiderComponent } from './components/list-rider/list-rider.component';
import { ViewRiderComponent } from './components/view-rider/view-rider.component';
import { FleetRidersComponent } from './components/fleet-riders/fleet-riders.component';
import { SharedModule } from '../shared/shared.module';
import { EditRiderComponent } from './components/edit-rider/edit-rider.component';



@NgModule({
  declarations: [AddRiderComponent, ListRiderComponent, ViewRiderComponent, FleetRidersComponent, EditRiderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListRiderComponent, FleetRidersComponent]
})
export class RidersModule { }