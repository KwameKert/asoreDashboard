import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  userForm: FormGroup ;
  role: any = '';

  constructor(private _fb: FormBuilder, private _adminService: AdminService,  private ngxService: NgxUiLoaderService, public dialogRef: MatDialogRef<AddAdminComponent>) { }

  ngOnInit(): void {
    
    this.userForm = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('123456', Validators.required),
      role: '',
      status: ''
    })
  }


  async addUser(){

    try{
      this.ngxService.start()
      let resObject =  await this._adminService.addAdmin(this.userForm.value);
  
      if(resObject){
        this.userForm.reset();

        this.dialogRef.close({event:true});
        
      }

      
    }catch(error){
      console.error(error)
    }finally{
      this.ngxService.stop()
    }
}


}