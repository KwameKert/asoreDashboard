import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { FleetManagerComponent } from './components/fleet-manager/fleet-manager.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AdminComponent, FleetManagerComponent],
  imports: [
    CommonModule,
    SharedModule,
  
  ],
  exports: [AdminComponent, FleetManagerComponent]
})
export class DashboardModule { }
