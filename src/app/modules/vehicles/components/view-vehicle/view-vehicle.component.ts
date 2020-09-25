import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.scss']
})
export class ViewVehicleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
   

  ngOnInit() {
  
   //console.log(this.data);
  }

  close(){
 
      this.dialogRef.close();
    
   }


}
