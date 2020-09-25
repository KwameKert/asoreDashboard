import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './component/list-orders/list-orders.component';
import { ViewOrderComponent } from './component/view-order/view-order.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListOrdersComponent, ViewOrderComponent],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [ListOrdersComponent]
})
export class OrdersModule { }
