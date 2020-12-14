import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { RiderService } from '../../rider.service';
import { AddRiderComponent } from '../add-rider/add-rider.component';
import { EditRiderComponent } from '../edit-rider/edit-rider.component';
import { ViewRiderComponent } from '../view-rider/view-rider.component';

@Component({
  selector: 'app-fleet-riders',
  templateUrl: './fleet-riders.component.html',
  styleUrls: ['./fleet-riders.component.scss']
})
export class FleetRidersComponent implements OnInit {

  displayedColumns: Array<string> = ['full name', 'address', 'status', 'phone','created_on', 'actions'];
  isLoading: boolean = true;
  dataSource: MatTableDataSource<any> = null;
  isEmpty: boolean = false;
  
  constructor(private _riderService: RiderService,  public dialog: MatDialog) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit(): void {
    this.loadRiders();
  }


  async loadRiders(){
    try{
      this.isLoading = true;
      let riders = await this._riderService.fetchManagerRiderList();
        this.dataSource = new MatTableDataSource(riders.data);
        this.dataSource.paginator = this.paginator;
      
    }catch(error){
      this.isEmpty = true;
    }finally{
      this.isLoading = false;
    }
  
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteRider(_id: Number){
    let data = {model: "rider", _id, word: "DELETe rider"}
    
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '280px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        
        // this._snackBar.open("User Deleted 🙂  ", "", {
        //   duration: 2000,
        // });
      }else{

        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    });
  }

  editRider(rider: any){
    console.log(rider)
    const dialogRef = this.dialog.open(AddRiderComponent, {
      width: '820px',
      height: '350px',
      data: rider
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
      //  this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
       this.loadRiders()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }

 
  addRider(){

    
    const dialogRef = this.dialog.open(AddRiderComponent, {
      width: '820px',
      height: '70%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
       // this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
       this.loadRiders()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });

  }

  viewRider(data: any){
    const dialogRef = this.dialog.open(ViewRiderComponent, {
      width: '800px',
      height: '420px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });

  }
}
