import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/dashboard';
import { ListAdminComponent } from 'src/app/modules/admins/components/list-admin/list-admin.component';
import { ListCustomerComponent } from 'src/app/modules/customers/components/list-customer/list-customer.component';
import { UpdateProfileComponent } from 'src/app/modules/profile/components/update-profile/update-profile.component';
import { ChangePasswordComponent } from 'src/app/modules/profile/components/change-password/change-password.component';
import { AddMemberComponent } from 'src/app/modules/customers/components/add-member/add-member.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminComponent },

  {
    path: 'admins',
    component: ListAdminComponent,
    data: {
      title: 'admin',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard',
        },
        {
          label: 'administrators',
          url: '',
        },
      ],
    },
  },
  {
    path: 'members',
    component: ListCustomerComponent,
    data: {
      title: 'member',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard',
        },
        {
          label: 'member',
          url: '',
        },
      ],
    },
  },
  {
    path: 'add-member',
    component: AddMemberComponent,
    data: {
      title: 'member',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard',
        },
        {
          label: 'member',
          url: '',
        },
      ],
    },
  },
  {
    path: 'add-member/:id',
    component: AddMemberComponent,
    data: {
      title: 'member',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard',
        },
        {
          label: 'member',
          url: '',
        },
      ],
    },
  },

  {
    path: 'profile',
    component: UpdateProfileComponent,
    data: {
      title: 'profile',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard',
        },
        {
          label: 'profile',
          url: '',
        },
      ],
    },
  },
  {
    path: 'settings',
    component: ChangePasswordComponent,
    data: {
      title: 'setting',
      breadcrumb: [
        {
          label: 'home',
          url: '/admin/dashboard',
        },
        {
          label: 'setting',
          url: '',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
