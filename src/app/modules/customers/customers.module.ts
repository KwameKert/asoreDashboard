import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { SharedModule } from '../shared/shared.module';
import { AddMemberComponent } from './components/add-member/add-member.component';



@NgModule({
  declarations: [AddCustomerComponent, ListCustomerComponent, ViewCustomerComponent, AddMemberComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomersModule { }
