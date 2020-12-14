import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './component/list-orders/list-orders.component';
import { ViewOrderComponent } from './component/view-order/view-order.component';
import { SharedModule } from '../shared/shared.module';
import { ListManagerOrdersComponent } from './component/list-manager-orders/list-manager-orders.component';



@NgModule({
  declarations: [ListOrdersComponent, ViewOrderComponent, ListManagerOrdersComponent],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [ListOrdersComponent, ViewOrderComponent, ListManagerOrdersComponent]
})
export class OrdersModule { }
