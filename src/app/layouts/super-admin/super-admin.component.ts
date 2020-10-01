import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {


  pageTitle: string;
  role: string = "Administrator";
  links: Array<object> = [
    {name: "Dashboard", icon: "md md-dashboard", url: "/admin/dashboard"},
    {name: "Fleets", icon: "fa fa-car", url: "/", links: [{
      name: "Fleet Managers", url: "/admin/fleet_managers"
    },
    {
      name: "Riders", url: "/admin/riders"
    }]
  },
    {name: "Orders", icon: "fa fa-cart-arrow-down", url: "/admin/orders"},
    {name: "Users", icon: "fa  fa-users", links: [
      {name: "Customers", url: "/admin/customers"},
      {name: "Admins", url: "/admin/admins"}
    ]},
    {name: "Settings", icon: "fa fa-gears", links:  [
      {name: "Toll", url: "/"},
      
    ]}
  ];

  breadcrumbConfig: object = {
    bgColor: '#eee',
    fontSize: '14px',
    fontColor: '#0275d8',
    lastLinkColor: '#000',
    symbol: ' >',
  }
   breadcrumbs  =  [
    {
      label:'home',
      url: ''
    }]

  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) { 
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumbs)
  }

  ngOnInit(): void {
  }

  changeTitle(title: string){
    this.pageTitle = title;
  }

  loadLinks(){

  }

}
