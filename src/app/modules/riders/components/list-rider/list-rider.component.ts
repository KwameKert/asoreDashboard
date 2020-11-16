import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { RiderService } from '../../rider.service';
import { AddRiderComponent } from '../add-rider/add-rider.component';
import { ViewRiderComponent } from '../view-rider/view-rider.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-list-rider',
  templateUrl: './list-rider.component.html',
  styleUrls: ['./list-rider.component.scss']
})
export class ListRiderComponent implements OnInit {

 //displayedColumns: Array<string> = ['id','full name', 'address', 'status', 'phone', 'stars',  'created_on', 'actions'];
  displayedColumns: string[] = [ 'address', 'status','full name','created_on', 'stars', 'actions'];
  isLoading: boolean = false;
 dataSource: MatTableDataSource<any>;

 // dataSource: MatTableDataSource<any> = null;
  isEmpty: boolean = false;
  
  constructor(private _riderService: RiderService,  public dialog: MatDialog) { 
   // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(users);
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  ngOnInit(): void {
   this.loadRiders();
  }


  async loadRiders(){
    try{
      this.isLoading = true;
      let riders = await this._riderService.query({status: "live"});
        this.dataSource = new MatTableDataSource(riders.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
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
    
      }else{

      }
    });
  }

  // editRider(rider: any){
  //   console.log(rider)
  //   const dialogRef = this.dialog.open(AddRiderComponent, {
  //     width: '820px',
  //     height: '520px',
  //     data: rider
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event){
  //     //  this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
  //      this.loadRiders()
  //     }
  //   }, error=>{
  //     // this._toastr.error("Oops an error. 🥺","",{
  //     //   timeOut:2000
  //     // })
  //   });
  // }

 
  // addRider(){

  //   const dialogRef = this.dialog.open(AddRiderComponent, {
  //     width: '820px',
  //     height: '520px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event){
  //      // this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
  //      this.loadRiders()
  //     }
  //   }, error=>{
  //     // this._toastr.error("Oops an error. 🥺","",{
  //     //   timeOut:2000
  //     // })
  //   });

  // }

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

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
