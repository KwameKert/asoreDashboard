import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-rider',
  templateUrl: './view-rider.component.html',
  styleUrls: ['./view-rider.component.scss']
})
export class ViewRiderComponent implements OnInit {

  age: any;
  
  hostUrl: string = 'http://api.thinksophtlabs:3000/'
  constructor(
    public dialogRef: MatDialogRef<ViewRiderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
   

  ngOnInit() {
    console.log(this.data.dob)

    this.dialogRef.updatePosition({top: '150px'})
    let birthday = new Date(this.data.dob)
  this.age = this._calculateAge(birthday)
   //console.log(this.data);
  }

   _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  close(){
 
      this.dialogRef.close();
    
   }
}
