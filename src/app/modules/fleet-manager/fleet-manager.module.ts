import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddManagerComponent, ListManagerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FleetManagerModule { }
