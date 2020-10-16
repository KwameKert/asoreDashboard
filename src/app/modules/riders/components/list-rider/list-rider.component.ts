import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { RiderService } from '../../rider.service';
import { AddRiderComponent } from '../add-rider/add-rider.component';
import { ViewRiderComponent } from '../view-rider/view-rider.component';

import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-list-rider',
  templateUrl: './list-rider.component.html',
  styleUrls: ['./list-rider.component.scss']
})
export class ListRiderComponent implements OnInit {

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
      let riders = await this._riderService.query({status: "live"});
        this.dataSource = new MatTableDataSource(riders.data);
        this.dataSource.paginator = this.paginator;
      
    }catch(error){
      this.isEmpty = true;
    }finally{
      this.isLoading = false;
    }
  
  }



  deleteRider(_id: Number){
    let data = {
    model: "rider", _id, word: "DELETe rider"
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this.loadRiders();
        
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
      height: '520px',
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
      height: '520px'
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
