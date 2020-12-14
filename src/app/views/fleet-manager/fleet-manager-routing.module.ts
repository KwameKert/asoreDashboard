import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FleetManagerComponent } from 'src/app/modules/dashboard';
import { ListVehicleComponent } from 'src/app/modules/vehicles/components/list-vehicle/list-vehicle.component';
import { RidersModule } from 'src/app/modules/riders/riders.module';
import { FleetRidersComponent } from 'src/app/modules/riders/components/fleet-riders/fleet-riders.component';
import { ChangePasswordComponent } from 'src/app/modules/profile/components/change-password/change-password.component';
import { UpdateProfileComponent } from 'src/app/modules/profile/components/update-profile/update-profile.component';
import { ListManagerOrdersComponent } from 'src/app/modules/orders/component/list-manager-orders/list-manager-orders.component';
import { ViewOrderComponent } from 'src/app/modules/orders/component/view-order/view-order.component';
import { ManagerUpdateProfileComponent } from 'src/app/modules/profile/components/manager-update-profile/manager-update-profile.component';
import { ManagerChangePasswordComponent } from 'src/app/modules/profile/components/manager-change-password/manager-change-password.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: FleetManagerComponent, 
    data: {
      title: 'dashboard',
      breadcrumb: [
        {
          label: 'home',
          url: '/manager/dashboard'
        }
      ]
    },
  },
  {
    path: 'vehicles', 
    component: ListVehicleComponent,
    data: {
      title: 'vehicle',
      breadcrumb: [
        {
          label: 'home',
          url: '/manager/dashboard'
        },
        {
          label: 'vehicle',
          url: ''
        }
      ]
    },
  },
  {
    path: 'orders', 
    component: ListManagerOrdersComponent,
    data: {
      title: 'vehicle',
      breadcrumb: [
        {
          label: 'home',
          url: '/manager/dashboard'
        },
        {
          label: 'order',
          url: ''
        }
      ]
    },
  },
  {path: 'order/:id', component: ViewOrderComponent,
data: {
  title: 'order',
  breadcrumb: [
    {
      label: 'home',
      url: '/manager/dashboard'
    },
    {
      label: 'orders',
      url: '/manager/orders'
    },
    {
      label: 'view order',
      url: ''
    }
  ]
},
},
  {
    path: 'riders', 
    component: FleetRidersComponent,
    data: {
      title: 'vehicle',
      breadcrumb: [
        {
          label: 'home',
          url: '/manager/dashboard'
        },
        {
          label: 'riders',
          url: ''
        }
      ]
    },
  },
  {path: 'profile', component: ManagerUpdateProfileComponent,
  data: {
    title: 'profile',
    breadcrumb: [
      {
        label: 'home',
        url: '/manager/dashboard'
      },
      {
        label: 'profile',
        url: ''
      }
    ]
  },},
  {path: 'settings', component: ManagerChangePasswordComponent,
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
export class FleetManagerRoutingModule { }
