import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-pricing',
  templateUrl: './view-pricing.component.html',
  styleUrls: ['./view-pricing.component.scss']
})
export class ViewPricingComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewPricingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
   

  ngOnInit() {
 
   //console.log(this.data);
  }


  

  close(){
 
      this.dialogRef.close();
    
   }
}
