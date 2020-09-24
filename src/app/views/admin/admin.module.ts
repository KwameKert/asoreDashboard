import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FleetManagerModule } from 'src/app/modules/fleet-manager/fleet-manager.module';
import { AdminsModule } from 'src/app/modules/admins/admins.module';
import { CustomersModule } from 'src/app/modules/customers/customers.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FleetManagerModule, 
    AdminsModule,
    CustomersModule
  ]
})


export class AdminModule { }
