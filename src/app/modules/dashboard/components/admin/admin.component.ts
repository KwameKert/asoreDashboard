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
  pictureUrl: any = "assets/images/avatar.jpg";
  Highcharts: typeof Highcharts = Highcharts;
  reconcilliations: Array<any>;
  confirmedMembers: number ;
  totalMembers: number;
  totalConfirmed: number;
  males: number;
  females: number;
  birthdays: Array<any> = null;
  anniversaries: Array<any> = null;
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
        this.totalMembers = results.totalMembers;
        this.confirmedMembers = results.confirmedMembers;
        this.males = results.males;
        this.females = results.females;
        this.birthdays = results.birthdays.length >0? results.birthdays: null;
        this.anniversaries = results.weddingAnniversaries.length >0 ?results.weddingAnniversaries: null;
        this.loadCharts();
        //this.reconcilliations = results.latestReconcilliations;
      }
    } catch (error) {
      console.error(error);
    }
  }

  loadCharts() {
    return this.barChartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: `<strong>${this.totalMembers}<br> members</strong>`,
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
            name: 'Members',
            data: [
            
              {
                name: 'Females',
                y: this.females,
              }, 
              {
                name: 'Males',
                y: this.males
              }],
            type: 'pie',
            innerSize: '70%',
          }]
      }
  

}
}
