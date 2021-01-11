import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RiderService } from '../../rider.service';

@Component({
  selector: 'app-update-rider-status',
  templateUrl: './update-rider-status.component.html',
  styleUrls: ['./update-rider-status.component.scss']
})
export class UpdateRiderStatusComponent implements OnInit {

 
  keyWord: string;
  isValid: boolean = false;

  constructor(public dialogRef: MatDialogRef<UpdateRiderStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _riderService: RiderService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  checkWord(){
   
      this.keyWord == this.data.word ? this.isValid = true : this.isValid = false;
  }

  async update(){

    try{
      let data = {
        _id: this.data._id
      }
      console.log(data)
      let resObj = await this._riderService.updateRiderStatus(this.data._id);
      if(resObj){
        let evt = {
          data: resObj.data,
          event: true
        }
        this.dialogRef.close(evt);
     }
  
    }catch(error){

        console.warn(error);
        this.dialogRef.close({event:false});
    }

  }

  close(){
    this.dialogRef.close({event: false});
  }

}
