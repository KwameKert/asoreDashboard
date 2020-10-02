import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/delete-item/delete-item.component';
import { SettingService } from '../../setting.service';
import { AddSettingComponent } from '../add-setting/add-setting.component';
import { ViewSettingComponent } from '../view-setting/view-setting.component';

@Component({
  selector: 'app-list-settings',
  templateUrl: './list-settings.component.html',
  styleUrls: ['./list-settings.component.scss']
})
export class ListSettingsComponent implements OnInit {

  displayedColumns: Array<string> = ['minute', 'meter', 'flat', 'created_on', 'actions'];
  isLoading: boolean = true;
  dataSource: any = null;
  isEmpty: boolean = false;
  
  constructor(private _settingService: SettingService,  public dialog: MatDialog) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit(): void {
    this.loadSettings();
  }


  async loadSettings(){
    try{
      this.isLoading = true;
      let settings = await this._settingService.fetchSettings();
        this.dataSource = settings.data;
        this.dataSource.paginator = this.paginator;
      
    }catch(error){
      this.isEmpty = true;
    }finally{
      this.isLoading = false;
    }
  
  }



  deleteSetting(_id: Number){
    let data = {
      module: 'users',
      data: {model: "setting", _id, word: "DELETe setting"}
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this.loadSettings();
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

  editSetting(setting: any){
    console.log(setting)
    const dialogRef = this.dialog.open(AddSettingComponent, {
      width: '820px',
      height: '520px',
      data: setting
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
      //  this._toastr.success("Setting added successfully", "Success  😊", {  timeOut:2000});
       this.loadSettings()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }

 
  addSetting(){

    const dialogRef = this.dialog.open(AddSettingComponent, {
      width: '820px',
      height: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
       // this._toastr.success("Setting added successfully", "Success  😊", {  timeOut:2000});
       this.loadSettings()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });

  }

  viewSetting(data: any){
    const dialogRef = this.dialog.open(ViewSettingComponent, {
      width: '600px',
      height: '350px',
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
