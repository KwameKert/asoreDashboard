import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { FleetManagerService } from '../../fleet-manager.service';
import { AddManagerComponent} from '../add-manager/add-manager.component';
import { ViewManagerComponent } from '../view-manager/view-manager.component';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  displayedColumns: Array<string> = ['company','full name','created_on', 'actions'];
  dataSource: any = null;
  isLoading: boolean = false;
  isEmpty: boolean = false;
  

  constructor(private _fleetService: FleetManagerService,  private ngxService: NgxUiLoaderService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.fetchFleets()
  }

  async fetchFleets(){
    try{
      this.ngxService.start()

      let response = await this._fleetService.listFleetManagers();
      if(response.data && response.data.length != 0){
        let result = response.data;
        this.dataSource = result;
        this.dataSource.paginator = this.paginator;
        
      }else{
        this.isEmpty = true;
      }

    }catch(error){
      console.error(error)
    }finally{
      this.ngxService.stop()
    }
  }


  deleteManager(_id: string){
  
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '650px',
      height: '280px',
      data: {model: "user/admin", _id, word: "DELETE manager"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this.fetchFleets()
      }else{
        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    });

  }

  editManager(data: any){
    const dialogRef = this.dialog.open(AddManagerComponent, {
      width: '820px',
      height: '320px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this.fetchFleets()
       }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }

  viewManager(data: any){
    const dialogRef = this.dialog.open(ViewManagerComponent, {
      width: '800px',
      height: '500px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }


  addManager(){

    const dialogRef = this.dialog.open(AddManagerComponent, {
      width: '620px',
      height: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
       // this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
       this.fetchFleets()
      }
    }, error=>{

    });
  }
}
