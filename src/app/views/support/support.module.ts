import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketModule } from 'src/app/modules/ticket/ticket.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { SupportRoutingModule } from './support-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TicketModule,
    DashboardModule,
  //  SupportRoutingModule

  ]
})
export class SupportModule { }
