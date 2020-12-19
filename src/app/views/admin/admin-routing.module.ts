import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/dashboard';
import { ListManagerComponent } from 'src/app/modules/fleet-manager/components/list-manager/list-manager.component';
import { ListAdminComponent } from 'src/app/modules/admins/components/list-admin/list-admin.component';
import { ListCustomerComponent } from 'src/app/modules/customers/components/list-customer/list-customer.component';
import { ListOrdersComponent } from 'src/app/modules/orders/component/list-orders/list-orders.component';
import { ListRiderComponent } from 'src/app/modules/riders/components/list-rider/list-rider.component';
import { ListPricingComponent } from 'src/app/modules/pricing/components/list-pricing/list-pricing.component';
import { UpdateProfileComponent } from 'src/app/modules/profile/components/update-profile/update-profile.component';
import { ChangePasswordComponent } from 'src/app/modules/profile/components/change-password/change-password.component';
import { ViewOrderComponent } from 'src/app/modules/orders/component/view-order/view-order.component';
import { ListTicketComponent } from 'src/app/modules/ticket/components/list-ticket/list-ticket.component';
import { ViewTicketComponent } from 'src/app/modules/ticket/components/view-ticket/view-ticket.component';
import { FetchReconcilliationsComponent } from 'src/app/modules/transaction/fetch-reconcilliations/fetch-reconcilliations.component';

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
  {
    path: 'reconcilliation',
    component: FetchReconcilliationsComponent,
    data: {
      title: 'transactions',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard'
        },
        {
          label: 'reconcilliation',
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
        label: 'orders',
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
      url: '/admin/dashboard'
    },
    {
      label: 'orders',
      url: '/admin/orders'
    },
    {
      label: 'view order',
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

  {path: 'pricing', component: ListPricingComponent,
  data: {
    title: 'pricing',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
      },
      {
        label: 'pricing',
        url: ''
      }
    ]
  },},

  {path: 'profile', component: UpdateProfileComponent,
  data: {
    title: 'profile',
    breadcrumb: [
      {
        label: 'home',
        url: '/admin/dashboard'
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
        url: '/admin/dashboard'
      },
      {
        label: 'setting',
        url: ''
      }
    ]
  },},
  {path: 'tickets', component: ListTicketComponent,
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
        url: '/admin/dashboard'
      },
      {
        label: 'ticket',
        url: 'admin/ticket'
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
export class AdminRoutingModule { }
