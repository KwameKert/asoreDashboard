import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { Member, MemberService } from '../../members.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  memberForm: FormGroup;
  memberData: Member = null;
  pictureUrl: any = "assets/images/avatar.jpg";
  fileData: File = null;
  previewUrl:any = null;
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private customerService: MemberService,
    private ngxService: NgxUiLoaderService,
    private _router: Router,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.loadForm();
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {

      this.fetchMember(id);
    }
  }

  loadForm() {
    this.memberForm = this.fb.group({
      firstName: '',
      lastName: '',
      otherNames: '',
      dateOfBirth: '',
      placeOfBirth: '',
      placeOfResidence: '',
      contactAddress: '',
      email: '',
      weddingDate: '',
      occupation: '',
      maritalStatus: '',
      numOfChildren: '',
      placeOfBaptism: '',
      confirmed: '',
      groupName: '',
      duesPaymentStatus: '',
    });
  }

  async fetchMember(id){
  //s  console.log("fetching member data")
    this.ngxService.start();
    try {
       let result = await this.customerService.fetchItem(id);
      console.log(result);
      if (result.status == 201 || result.status == 200) {
        this.memberData = result.data
        this.patchForm(result.data)
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.ngxService.stop();
    }
  }

  patchForm(data){
    this.memberForm = this.fb.group({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      otherNames: data.otherNames,
      dateOfBirth: data.dateOfBirth,
      placeOfBirth: data.placeOfBirth,
      placeOfResidence:  data.placeOfResidence,
      contactAddress: data.contactAddress,
      email: data.email,
      weddingDate: data.weddingDate,
      occupation: data.occupation,
      maritalStatus: data.maritalStatus,
      numOfChildren: data.numOfChildren,
      placeOfBaptism: data.placeOfBaptism,
      confirmed: data.confirmed,
      groupName: data.groupName,
      duesPaymentStatus: data.duesPaymentStatus,
    });
    this.pictureUrl = data.imageUrl? data.imageUrl: "assets/images/avatar.jpg";
  }
  async saveMember() {
    this.ngxService.start();
    try {
      let result;
      for(let key of Object.keys(this.memberForm.value)){
        this.formData.append(key,this.memberForm.value[key] )
      }
  
     // console.log(this.formData)
     console.log("memeber data ", this.memberData)
      if (this.memberData != null) {
        console.log("updating")
       result = await this.customerService.updateMember(this.formData);
      } else {
       result = await this.customerService.addMember(this.formData);
      }
      console.log(result);
      if (result.status == 201 || result.status == 200) {
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.ngxService.stop();
    }
  }

  listMembers() {
    this._router.navigate(['/admin/members']);
  }

  imageProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.formData.append('image', this.fileData, this.fileData.name);
    this.preview();
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.formData.append('file', this.fileData, this.fileData.name);
    
  }


  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.pictureUrl = reader.result; 
    }

    
    }
}
