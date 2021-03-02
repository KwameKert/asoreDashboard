import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { ViewMemberComponent } from './components/view-member/view-member.component';
import { SharedModule } from '../shared/shared.module';
import { AddMemberComponent } from './components/add-member/add-member.component';



@NgModule({
  declarations: [AddCustomerComponent, ListMemberComponent, ViewMemberComponent, AddMemberComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomersModule { }
