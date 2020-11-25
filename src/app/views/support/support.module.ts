import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupportRoutingModule} from './support-routing.module';
import { TicketModule } from 'src/app/modules/ticket/ticket.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupportRoutingModule,
    TicketModule
  ]
})
export class SupportModule { }
