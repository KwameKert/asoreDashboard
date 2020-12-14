import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FleetLoginComponent } from './components/fleet-login/fleet-login.component';


@NgModule({
  declarations: [LoginComponent, FleetLoginComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
  ],
})

export class AuthenticationModule { }
