import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FleetManagerComponent } from 'src/app/modules/dashboard';
import { ListVehicleComponent } from 'src/app/modules/vehicles/components/list-vehicle/list-vehicle.component';
import { RidersModule } from 'src/app/modules/riders/riders.module';
import { FleetRidersComponent } from 'src/app/modules/riders/components/fleet-riders/fleet-riders.component';


const routes: Routes = [
  {path: 'dashboard', component: FleetManagerComponent},
  {path: 'vehicles', component: ListVehicleComponent},
  {path: 'riders', component: FleetRidersComponent}
  // {path: 'orders', component: ''},
  // {path: 'vehicle', component: ''},
  // {path: 'riders', component: ''},


]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetManagerRoutingModule { }
