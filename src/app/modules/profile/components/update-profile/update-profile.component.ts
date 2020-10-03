import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  profileForm: FormGroup;
  result: any;
  constructor(private  _profileService: ProfileService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();

    this.fetchProfile();
   
  }


  loadForm(){
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  patchForm(){
    this.profileForm.patchValue({
      fullName: this.result.fullName,
      username: this.result.username,
      company: this.result.company,
      phone: this.result.phone,
      email: this.result.email
    })
  }

  async  fetchProfile(){
      try{
        let response = await this._profileService.fetchProfile()
        if(response){
          this.result = response.data
          this.patchForm();
          //console.log((await result).data)
        }
      }catch(error){
        console.error(error)
      }
  }

  async saveProfile(data: any){
    try{

      let response = await this._profileService.updateProfile(data);
      if(response){
        let result = response.data;
        console.log(result);
      }

    }catch(error){
      console.error(error);
    }
  }

}
