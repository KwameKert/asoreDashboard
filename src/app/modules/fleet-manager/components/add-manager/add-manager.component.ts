import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FleetManagerService} from '../../fleet-manager.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {

  managerForm: FormGroup;
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _fleetService: FleetManagerService, public dialogRef: MatDialogRef<AddManagerComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.editManagerForm()
    }else{

      this.loadManagerForm();
    }
  }

  loadManagerForm(){
    this.managerForm = this._fb.group({
      fullName: '',
      email: ['', Validators.email],
      username: '',
      role: 'FLEET MANAGER',
      company: '',
      status: ''
    })
  }

  editManagerForm(){
    this.managerForm = this._fb.group({
      _id: this.data._id,
      fullName: this.data.fullName,
      email: [this.data.email, Validators.email],
      username: this.data.username,
      company: this.data.company,
      status: this.data.status
    })
  }



  async saveManager(data){
    //console.e
    try{
      let response;
      if(this.data){
        response = await this._fleetService.updateItem(data);
      }else{
        response = await this._fleetService.addItem(data);
      }
      
      if(response){
        this.dialogRef.close({event:true});
      }


    }catch(error){
      console.error(error)
    }
  }

}
