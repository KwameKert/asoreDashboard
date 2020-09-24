import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';



@NgModule({
  declarations: [AddAdminComponent, ListAdminComponent, ViewAdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminsModule { }
