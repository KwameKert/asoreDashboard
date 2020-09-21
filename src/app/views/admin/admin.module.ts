import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FleetManagerModule } from 'src/app/modules/fleet-manager/fleet-manager.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FleetManagerModule
  ]
})
export class AdminModule { }
