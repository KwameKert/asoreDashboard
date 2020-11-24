import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/modules/profile/components/change-password/change-password.component';
import { AdminComponent } from 'src/app/modules/dashboard';
import { MyTicketsComponent } from 'src/app/modules/ticket/components/my-tickets/my-tickets.component';
import { UpdateProfileComponent } from 'src/app/modules/profile/components/update-profile/update-profile.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminComponent, 
    data: {
      title: 'dashboard',
      breadcrumb: [
        {
          label: 'home',
          url: '/support/dashboard'
        }
      ]
    },
  },
  {
    path: 'tickets', 
    component: MyTicketsComponent,
    data: {
      title: 'tickets',
      breadcrumb: [
        {
          label: 'home',
          url: '/support/dashboard'
        },
        {
          label: 'tickets',
          url: ''
        }
      ]
    },
  },
  
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
        url: '/manager/dashboard'
      },
      {
        label: 'setting',
        url: ''
      }
    ]
  },}
  // {path: 'orders', component: ''},
  // {path: 'vehicle', component: ''},
  // {path: 'riders', component: ''},


]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }

