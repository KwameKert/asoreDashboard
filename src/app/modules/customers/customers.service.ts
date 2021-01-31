import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Customer{
  id ?: string,
  firstName ?: string, 
  lastName ?: string, 
  otherNames ?: string, 
  placeOfBirth ?: string, 
  placeOfResidence ?: string, 
  placeOfBaptism ?: string, 
  contactAddress: string, 
  occupation: string, 
  dateOfBirth ?: Date,
  email: string,
  numOfChildren: number,
  confirmed: string, 
  groupName: string, 
  duesPaymentStatus: string,
  maritalStatus?: string,
  createdAt: Date
}


@Injectable({
  providedIn: 'root'
})
export class CustomersService extends CrudService<Customer> {

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "member")
  }

}
