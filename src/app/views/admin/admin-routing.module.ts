import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/dashboard';
import { ListManagerComponent } from 'src/app/modules/fleet-manager/components/list-manager/list-manager.component';

const routes: Routes = [
  {path: 'dashboard', component: AdminComponent},
  {path: 'fleet_managers', component: ListManagerComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
