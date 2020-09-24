import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
   

  ngOnInit() {
  
   //console.log(this.data);
  }

  close(){
 
      this.dialogRef.close();
    
   }

}
