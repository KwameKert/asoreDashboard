import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/dashboard';
import { UpdateProfileComponent } from 'src/app/modules/profile/components/update-profile/update-profile.component';
import { ChangePasswordComponent } from 'src/app/modules/profile/components/change-password/change-password.component';
import { ViewTicketComponent } from 'src/app/modules/ticket/components/view-ticket/view-ticket.component';
import { MyTicketsComponent } from 'src/app/modules/ticket/components/my-tickets/my-tickets.component';
import { ListTicketComponent } from 'src/app/modules/ticket/components/list-ticket/list-ticket.component';

const routes: Routes = [
  {path: 'dashboard', component: AdminComponent},

  

  {path: 'profile', component: UpdateProfileComponent,
  data: {
    title: 'profile',
    breadcrumb: [
      {
        label: 'home',
        url: '/support/dashboard'
      },
      {
        label: 'profile',
        url: ''
      }
    ]
  },},
  {path: 'settings', component: ChangePasswordComponent,
  data: {
    title: 'setting',
    breadcrumb: [
      {
        label: 'home',
        url: '/suuport/dashboard'
      },
      {
        label: 'setting',
        url: ''
      }
    ]
  },},
  {path: 'tickets', component: MyTicketsComponent,
  data: {
    title: 'ticket',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
      },
      {
        label: 'ticket',
        url: ''
      }
    ]
  },},
  {path: 'tickets/:id', component: ViewTicketComponent,
  data: {
    title: 'ticket',
    breadcrumb: [
      {
        label: 'home',
        url: '/support/dashboard'
      },
      {
        label: 'ticket',
        url: 'support/tickets'
      },
      {
        label: 'view-ticket',
        url: ''
      }
    ]
  },}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
