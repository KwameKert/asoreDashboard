import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  reconcilliations: Array<any>;
  totalRevenue: number ;
  totalOrders: number;
  totalRiders: number;
  totalUsers: number;
  //Highcharts: typeof Highcharts = Highcharts;
  barChartOptions: object;
  totalUnresolvedTickets: number;

  dataSource: any;
  
  displayedColumns: any = ['id', 'username', 'phone', 'email', 'createdAt'];

  constructor(private _dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchComponents();
   
  }

  async fetchComponents() {
    try {
      let response = await this._dashboardService.fetchComponents();
      if (response) {
        let results = response.data;
        this.totalOrders = results.totalOrders;
        this.totalRiders = results.totalRiders;
        this.totalUsers = results.totalUsers;
        this.totalUnresolvedTickets = results.totalUnresolvedTickets;
        this.reconcilliations = results.latestReconcilliations;
        this.totalRevenue = results.totalRevenue;
        console.log(this.reconcilliations)
        this.loadCharts(results.tickets);
        //this.reconcilliations = results.latestReconcilliations;
      }
    } catch (error) {
      console.error(error);
    }
  }

  loadCharts(tickets) {
    return this.barChartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: `<strong>${tickets.totalTickets}<br> tickets</strong>`,
          align: 'center',
          verticalAlign: 'middle',
          y: 0
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
            startAngle: -90,
            endAngle: -180,
            center: ['50%', '50%'],
            size: '90%',
            showInLegend: true
          }
        },
        series: [
          {
            name: 'Tickets',
            data: [
            
              {
                name: 'Opened',
                y: tickets.totalOpenedTickets,
              }, 
              {
                name: 'Pending',
                y: tickets.totalPendingTickets
              },
               {
                name: 'Resolved',
                y: tickets.totalResolvedTickets
              },{
                name: 'Processing',
                y: tickets.totalProcessingTickets,
              }],
            type: 'pie',
            innerSize: '70%',
          }]
      }
  

}
}
