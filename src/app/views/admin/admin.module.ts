import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminsModule } from 'src/app/modules/admins/admins.module';
import { CustomersModule } from 'src/app/modules/customers/customers.module';
import { ProfileModule } from 'src/app/modules/profile/profile.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminsModule,
    CustomersModule,
    DashboardModule,
    ProfileModule,
  ]
})


export class AdminModule { }
