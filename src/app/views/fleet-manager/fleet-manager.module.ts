import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersModule } from 'src/app/modules/customers/customers.module';
import { OrdersModule } from 'src/app/modules/orders/orders.module';
import { RidersModule } from 'src/app/modules/riders/riders.module';
import { FleetManagerRoutingModule } from './fleet-manager-routing.module';
import { VehiclesModule } from 'src/app/modules/vehicles/vehicles.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FleetManagerRoutingModule,
    CustomersModule,
    OrdersModule,
    RidersModule,
    VehiclesModule
  ]
})
export class FleetManagerModule { }
