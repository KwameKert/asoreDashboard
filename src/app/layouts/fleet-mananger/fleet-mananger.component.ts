import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-fleet-mananger',
  templateUrl: './fleet-mananger.component.html',
  styleUrls: ['./fleet-mananger.component.css']
})
export class FleetManangerComponent implements OnInit {

  pageTitle: string;
  role: string = "Manager"
  links: Array<object> = [
    {name: "Dashboard", icon: "md md-dashboard", url: "/manager/dashboard"},
    {name: "Vehicle", icon: "fa fa-car", url: "/manager/vehicles"},
    {name: "Orders", icon: "fa fa-cart-arrow-down", url: "/"},
    {name: "Riders", icon: "fa  fa-users", url: "/manager/riders"}
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
  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) { }
  
  ngOnInit(): void {
    
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumbs)
  }

  changeTitle(title: string){
    this.pageTitle = title;
  }

  loadLinks(){

  }

}
