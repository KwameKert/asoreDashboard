import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/dashboard';
import { ListManagerComponent } from 'src/app/modules/fleet-manager/components/list-manager/list-manager.component';
import { ListAdminComponent } from 'src/app/modules/admins/components/list-admin/list-admin.component';
import { ListCustomerComponent } from 'src/app/modules/customers/components/list-customer/list-customer.component';
import { ListOrdersComponent } from 'src/app/modules/orders/component/list-orders/list-orders.component';

const routes: Routes = [
  {path: 'dashboard', component: AdminComponent},
  {path: 'fleet_managers', component: ListManagerComponent},
  {path: 'admins', component: ListAdminComponent},
  {path: 'customers', component: ListCustomerComponent},
  {path: 'orders', component: ListOrdersComponent}

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
