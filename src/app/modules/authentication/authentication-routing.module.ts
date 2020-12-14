import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FleetLoginComponent } from './components/fleet-login/fleet-login.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ 

  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'manager-login', component: FleetLoginComponent}
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
