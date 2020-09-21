import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FleetManagerService } from '../../fleet-manager.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  displayedColumns: Array<string> = ['username', 'company', 'status', 'email','full name','created_on', 'actions'];
  constructor(private _fleetService: FleetManagerService,  private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fetchFleets()
  }

  async fetchFleets(){
    try{
      this.ngxService.start("Please wait ...")

      let response = await this._fleetService.query({role: "FLEET MANAGER"});
      if(response.data){
        let result = response.data;
        console.log(result)
      }
    }catch(error){
      console.error(error)
    }finally{
      this.ngxService.stop()
    }
  }
}
