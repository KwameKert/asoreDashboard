import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthLayoutComponent, SuperAdminComponent, FleetManangerComponent } from './layouts';
import { SupportComponent } from './layouts/support/support.component';

const routes: Routes = [
  {
    path:'', 
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/authentication/authentication.module')
                       .then(m => m.AuthenticationModule)
  },
  
  {
    path:'admin', 
    component: SuperAdminComponent,
    loadChildren: () => import('./views/admin/admin.module')
                       .then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path:'support', 
    component: SupportComponent,
    loadChildren: () => import('./views/support/support.module')
                       .then(m => m.SupportModule),
    canActivate: [AuthGuard]
  },
  {
    path:'manager', 
    component: FleetManangerComponent,
    loadChildren: () => import('./views/fleet-manager/fleet-manager.module')
                       .then(m => m.FleetManagerModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
