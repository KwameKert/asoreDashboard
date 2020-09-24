import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-mananger',
  templateUrl: './fleet-mananger.component.html',
  styleUrls: ['./fleet-mananger.component.css']
})
export class FleetManangerComponent implements OnInit {

  pageTitle: string;
  links: Array<object> = [
    {name: "Dashboard", icon: "md md-dashboard", url: "/fleet_manager/dashboard"},
    {name: "Vehicle", icon: "fa fa-car", url: "/"},
    {name: "Orders", icon: "fa fa-cart-arrow-down", url: "/"},
    {name: "Riders", icon: "fa  fa-users", url: "/"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(title: string){
    this.pageTitle = title;
  }

  loadLinks(){

  }

}
