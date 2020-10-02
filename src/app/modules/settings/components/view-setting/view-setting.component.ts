import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-setting',
  templateUrl: './view-setting.component.html',
  styleUrls: ['./view-setting.component.scss']
})
export class ViewSettingComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
   

  ngOnInit() {
 
   //console.log(this.data);
  }


  

  close(){
 
      this.dialogRef.close();
    
   }
}
