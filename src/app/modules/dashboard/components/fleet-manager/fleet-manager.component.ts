import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-manager',
  templateUrl: './fleet-manager.component.html',
  styleUrls: ['./fleet-manager.component.css']
})
export class FleetManagerComponent implements OnInit {

  pendingOrders = 234;
  completeOrders = 123;

  constructor() { }

  ngOnInit(): void {
  }

}
