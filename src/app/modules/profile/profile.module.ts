import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UpdateProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    UpdateProfileComponent,
    ChangePasswordComponent
  ]
})
export class ProfileModule { }
