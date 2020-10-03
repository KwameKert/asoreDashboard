import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private  _profileService: ProfileService) { }

  ngOnInit(): void {
  }


  async  fetchProfile(){
      try{
        let result = this._profileService.fetchProfile();
        if(result){
          console.log((await result).data)
        }
      }catch(error){
        console.error(error)
      }
  }

}
