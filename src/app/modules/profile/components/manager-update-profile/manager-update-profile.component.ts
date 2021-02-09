import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-manager-update-profile',
  templateUrl: './manager-update-profile.component.html',
  styleUrls: ['./manager-update-profile.component.scss']
})
export class ManagerUpdateProfileComponent implements OnInit {

  profileForm: FormGroup;
  result: any;
  constructor(private  _profileService: ProfileService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("manager profile here")
    this.loadForm();

    this.fetchProfile();
   
  }


  loadForm(){
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      companyName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  patchForm(){
    this.profileForm.patchValue({
      fullName: this.result.fullName,
      username: this.result.username,
      companyName: this.result.companyName,
      phone: this.result.phone,
      email: this.result.email
    })
  }

  async  fetchProfile(){
      try{
        let response = await this._profileService.fetchManagerProfile()
        if(response){
          this.result = response.data
          console.log(this.result)
          this.patchForm();
          //console.log((await result).data)
        }
      }catch(error){
        console.error(error)
      }
  }

  async saveProfile(data: any){
    try{

      let response = await this._profileService.updateManagerProfile(data);
      if(response){
        let result = response.data;
    //    console.log(result);
      }

    }catch(error){
      console.error(error);
    }
  }


}
