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
import { Customer, CustomersService } from '../../customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  memberForm: FormGroup;
  memberData: Customer = null;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomersService,
    private ngxService: NgxUiLoaderService,
    private _router: Router,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.loadForm();
    let id = this.route.snapshot.paramMap.get('id');
    this.fetchMember(id);
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
    this.ngxService.start();
    try {
       let result = await this.customerService.fetchItem(id);
      console.log(result);
      if (result.status == 201 || result.status == 200) {
        this.memberData == result.data
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
      occupation: data.occupation,
      maritalStatus: data.maritalStatus,
      numOfChildren: data.numOfChildren,
      placeOfBaptism: data.placeOfBaptism,
      confirmed: data.confirmed,
      groupName: data.groupName,
      duesPaymentStatus: data.duesPaymentStatus,
    });
  }
  async saveMember() {
    this.ngxService.start();
    try {
      let result;
      
      if (this.memberData != null) {
        console.log("updating")
        result = await this.customerService.updateItem(this.memberForm.value);
      } else {
        result = await this.customerService.addItem(this.memberForm.value);
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
}
