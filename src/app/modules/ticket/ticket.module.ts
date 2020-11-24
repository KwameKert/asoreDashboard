import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';
import { SharedModule } from '../shared/shared.module';
import { AssignTicketComponent } from './components/assign-ticket/assign-ticket.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';



@NgModule({
  declarations: [ListTicketComponent, ViewTicketComponent, UpdateTicketComponent, AssignTicketComponent, MyTicketsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListTicketComponent, ViewTicketComponent
  ]
})
export class TicketModule { }
