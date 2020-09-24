import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FleetManagerService} from '../../fleet-manager.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss']
})
export class AddManagerComponent implements OnInit {

  managerForm: FormGroup;
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _fleetService: FleetManagerService, public dialogRef: MatDialogRef<AddManagerComponent>) { }

  ngOnInit(): void {
    this.loadManagerForm();
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


  async saveManager(data){
    //console.e
    try{
      let response = await this._fleetService.addItem(data);
      console.log(response)
      if(response){
        this.dialogRef.close({event:true});
      }


    }catch(error){
      console.error(error)
    }
  }

}
