import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import { SharedModule } from '../shared/shared.module';
import { ViewManagerComponent } from './components/view-manager/view-manager.component';



@NgModule({
  declarations: [AddManagerComponent, ListManagerComponent, ViewManagerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FleetManagerModule { }
