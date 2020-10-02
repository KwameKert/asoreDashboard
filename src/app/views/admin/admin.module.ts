import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FleetManagerModule } from 'src/app/modules/fleet-manager/fleet-manager.module';
import { AdminsModule } from 'src/app/modules/admins/admins.module';
import { CustomersModule } from 'src/app/modules/customers/customers.module';
import { OrdersModule } from 'src/app/modules/orders/orders.module';
import { RidersModule } from 'src/app/modules/riders/riders.module';
import { PricingModule } from 'src/app/modules/pricing/pricing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FleetManagerModule, 
    AdminsModule,
    CustomersModule,
    OrdersModule,
    RidersModule,
    PricingModule
  ]
})


export class AdminModule { }
