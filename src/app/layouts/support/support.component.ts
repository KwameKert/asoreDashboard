import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  pageTitle: string;
  role: string = "Support";
  links: Array<object> = [
    {name: "Dashboard", icon: "md md-dashboard", url: "/admin/dashboard"},
    {name: "Tickets", icon: " fa fa-ticket", url: "/support/tickets"},
  ];

  headerLinks: Array<object> = [
    {name: 'Profile', icon: 'zmdi zmdi-account-circle', url: "/admin/profile"},
    {name: 'Settings', icon: 'zmdi zmdi-account-circle', url: "/admin/settings"} 
  ]

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
