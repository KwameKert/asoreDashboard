import { Component, OnInit } from '@angular/core';

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
