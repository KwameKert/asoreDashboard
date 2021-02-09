import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private _fb: FormBuilder, private _adminService: AdminService,  private ngxService: NgxUiLoaderService, public dialogRef: MatDialogRef<AddAdminComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.loadEditForm();
    }else{
      this.loadAddForm();
    }
  
    this.dialogRef.updatePosition({top: '150px'})
  }

  loadAddForm(){
    this.userForm = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('123456', Validators.required),
      role: '',
      status: ''
    })
  }

  loadEditForm(){
    this.userForm = this._fb.group({
      _id: this.data._id,
      username: new FormControl(this.data.username, [Validators.required, Validators.minLength(7)]),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
      role: this.data.role,
      status: this.data.status
    })
  }


  async addUser(){

    try{
      this.ngxService.start();
      let resObject ;

      if(this.data){
        resObject =  await this._adminService.updateItem(this.userForm.value);
      }else{
        resObject =  await this._adminService.addItem(this.userForm.value);
      }
  
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