import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AddRiderComponent } from 'src/app/modules/riders/components/add-rider/add-rider.component';
import { DataloadService } from 'src/app/modules/shared/service/dataload.service';
import { SettingService } from '../../setting.service';

@Component({
  selector: 'app-add-setting',
  templateUrl: './add-setting.component.html',
  styleUrls: ['./add-setting.component.scss']
})
export class AddSettingComponent implements OnInit {

  settingForm: FormGroup;
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _settingService: SettingService,  public dialogRef: MatDialogRef<AddRiderComponent>,  @Inject(MAT_DIALOG_DATA) public data: any, private _dataService: DataloadService) { }

   ngOnInit(): void {
  
    if(this.data){
      this.loadEditForm(this.data)
    }else{
      this.loadFound();
    }
  }

  loadFound(){
    this.settingForm = this._fb.group({
      amountPerMin: new FormControl('', Validators.required),
      amountPerMeter: new FormControl('', Validators.required),
      flatRate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: '',
    })
  }

  loadEditForm(data){
   
    this.settingForm = this._fb.group({
      _id: data._id,  
      amountPerMin: new FormControl(data.amountPerMin, Validators.required),
      amountPerMeter: new FormControl(data.amountPerMeter, Validators.required),
      flatRate: new FormControl(data.flatRate, Validators.required),
      status: new FormControl(data.status, Validators.required),
      description: data.description,
    
    });

   
  }

 async saveSetting(data: any){
    try{
     this.ngxService.start()

     if(this.data){
      let resObject = await this._settingService.updateItem(data);
      this.dialogRef.close({event:true});
     }else{
      let resObject = await this._settingService.addItem(data);
      this.dialogRef.close({event:true});
     }
     

    }catch(error){
      console.error(error);
    }finally{
      this.ngxService.stop();
    }

  }


}
