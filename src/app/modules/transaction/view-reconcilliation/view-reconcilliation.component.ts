import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-reconcilliation',
  templateUrl: './view-reconcilliation.component.html',
  styleUrls: ['./view-reconcilliation.component.scss']
})
export class ViewReconcilliationComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ViewReconcilliationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log("this is the data",this.data)
  }

   close(){
    this.dialogRef.close();
  }

}
