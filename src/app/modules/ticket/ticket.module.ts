import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListTicketComponent, ViewTicketComponent, UpdateTicketComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListTicketComponent, ViewTicketComponent
  ]
})
export class TicketModule { }
