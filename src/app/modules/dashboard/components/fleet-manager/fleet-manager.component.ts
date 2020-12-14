import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-fleet-manager',
  templateUrl: './fleet-manager.component.html',
  styleUrls: ['./fleet-manager.component.css']
})
export class FleetManagerComponent implements OnInit {

  totalOrders : number;
  totalRiders : number;
  totalVehicles: number;

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchComponents();
  }

  async fetchComponents(){
    try{
      let response = await this._dashboardService.fetchManagerComponents();
      if(response){
        let results = response.data;
        this.totalOrders = results.totalOrders;
        this.totalRiders = results.totalRiders;
        this.totalVehicles = results.totalVehicles;
      }

    }catch(error){
      console.error(error)
    }

  }

}
