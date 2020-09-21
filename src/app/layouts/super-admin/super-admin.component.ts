import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {


  pageTitle: string;
  links: Array<object> = [
    {name: "Dashboard", icon: "md md-dashboard", url: "/admin/dashboard"},
    {name: "Fleets", icon: "fa fa-car", url: "/", links: [{
      name: "Fleet Managers", url: "/admin/fleet_managers"
    },
    {
      name: "Riders", url: "/"
    }]
  },
    {name: "Orders", icon: "fa fa-cart-arrow-down", url: "/"},
    {name: "Users", icon: "fa  fa-users", links: [
      {name: "Customers", url: "/"},
      {name: "Admins", url: "/"}
    ]},
    {name: "Settings", icon: "fa fa-gears", links:  [
      {name: "Toll", url: "/"},
      
    ]}
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
