import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  totalOrders: number;
  totalRiders: number;
  totalUsers: number;
  
  dataSource: any;
  displayedColumns: any =['id', 'username', 'phone','email', 'createdAt'];


  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchComponents();
  }

  async fetchComponents(){
    try{
      let response = await this._dashboardService.fetchComponents();
      if(response){
        let results = response.data;
        this.totalOrders = results.totalOrders;
        this.totalRiders = results.totalRiders;
        this.totalUsers = results.totalUsers;
      }

    }catch(error){
      console.error(error)
    }
      // this._dashboardService.fetchComponents().subscribe(data=>{
      //     let result = data.data;
      //     this.totalOrders = result.totalOrders;
      //     this.pendingOrders = result.pendingOrders;
      //     this.dataSource = new MatTableDataSource<Position>(result.users);
      //     //this.completeOrders = data.complete
      // }, error=>{
      //   console.error(error)
      // })

  }

}
