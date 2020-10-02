import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/dashboard';
import { ListManagerComponent } from 'src/app/modules/fleet-manager/components/list-manager/list-manager.component';
import { ListAdminComponent } from 'src/app/modules/admins/components/list-admin/list-admin.component';
import { ListCustomerComponent } from 'src/app/modules/customers/components/list-customer/list-customer.component';
import { ListOrdersComponent } from 'src/app/modules/orders/component/list-orders/list-orders.component';
import { ListRiderComponent } from 'src/app/modules/riders/components/list-rider/list-rider.component';
import { ListSettingsComponent } from 'src/app/modules/settings/components/list-settings/list-settings.component';

const routes: Routes = [
  {path: 'dashboard', component: AdminComponent},
  {
    path: 'fleet_managers',
    component: ListManagerComponent,
    data: {
      title: 'manager',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard'
        },
        {
          label: 'fleet manager',
          url: ''
        }
      ]
    },
    },
  {path: 'admins', component: ListAdminComponent,
  data: {
      title: 'admin',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard'
        },
        {
          label: 'administrators',
          url: ''
        }
      ]
    },},
  {path: 'customers', component: ListCustomerComponent,
  data: {
    title: 'customer',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
      },
      {
        label: 'customer',
        url: ''
      }
    ]
  },},
  {path: 'orders', component: ListOrdersComponent,
  data: {
    title: 'order',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
      },
      {
        label: 'order',
        url: ''
      }
    ]
  },
},
  {path: 'riders', component: ListRiderComponent,
  data: {
    title: 'riders',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
      },
      {
        label: 'riders',
        url: ''
      }
    ]
  },},

  {path: 'settings', component: ListSettingsComponent,
  data: {
    title: 'settings',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
      },
      {
        label: 'settings',
        url: ''
      }
    ]
  },},


]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
