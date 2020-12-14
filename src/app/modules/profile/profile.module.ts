import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SharedModule } from '../shared/shared.module';
import { ManagerUpdateProfileComponent } from './components/manager-update-profile/manager-update-profile.component';
import { ManagerChangePasswordComponent } from './components/manager-change-password/manager-change-password.component';



@NgModule({
  declarations: [UpdateProfileComponent, ChangePasswordComponent, ManagerUpdateProfileComponent, ManagerChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    UpdateProfileComponent,
    ChangePasswordComponent,
    ManagerUpdateProfileComponent,
     ManagerChangePasswordComponent
  ]
})
export class ProfileModule { }
