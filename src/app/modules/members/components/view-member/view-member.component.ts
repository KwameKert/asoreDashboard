import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from '../../members.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {
  pictureUrl: any = "assets/images/avatar.jpg";
  apiUrl: string = "http://localhost:8080/files/"

  constructor(
    public dialogRef: MatDialogRef<ViewMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member) { }
   

  ngOnInit() {
    if(this.data.imageUrl){
      this.pictureUrl = this.data.imageUrl;
    }
   //console.log(this.data);
  }

  close(){
 
      this.dialogRef.close();
    
   }

}
