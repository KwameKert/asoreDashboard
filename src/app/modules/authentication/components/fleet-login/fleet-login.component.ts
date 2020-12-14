import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-fleet-login',
  templateUrl: './fleet-login.component.html',
  styleUrls: ['./fleet-login.component.scss']
})
export class FleetLoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup ;
  link: string ;

constructor(private _router: Router, private _fb: FormBuilder,private _authService: AuthService, private _toastr: ToastrService) { }

ngOnInit() {
 
  this.loginForm = this._fb.group({
      phone: new FormControl('', [Validators.minLength(10),Validators.required]),
      password: new FormControl('', Validators.required)
  });

}

 async loginUser(){
  this.isLoading  = true;

  try{
    let response = await  this._authService.managerLogin(this.loginForm.value);
    if(response){
        let user = response.user;
        return this._router.navigate(['/manager/dashboard']);
      }
  }catch(error){
    console.error()
  }finally{
    this.isLoading = false;
  }

}

  redirect(){
    this._router.navigate(['/admin'])
  }
}
