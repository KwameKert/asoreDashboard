import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/authentication/service/auth.service';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-manager-change-password',
  templateUrl: './manager-change-password.component.html',
  styleUrls: ['./manager-change-password.component.scss']
})
export class ManagerChangePasswordComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  isValid: boolean  = false;
  constructor(private _profileService: ProfileService, private _authService: AuthService) { }
  ngOnInit(): void {
  }

  checkValidity(){
   // console.log(this.newPassword, this.confirmPassword)
    if(this.oldPassword.length > 1 && this.newPassword == this.confirmPassword){
      this.isValid = true;
    }
  }


 async  submit(){
    let data = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }

    try{
      let result = await this._profileService.changeManagerPassword(data);
      if(result){
        this._authService.logout();
      }

    }catch(error){
      console.error(error)
    }

    
  }
}
