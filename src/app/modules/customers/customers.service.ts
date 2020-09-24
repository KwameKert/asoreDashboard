import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Customer{
  _id ?: string,
  phone : string,
  username: string, 
  address: string, 
  dob ?: Date,
  email: string,
  status?: boolean,
  isActivated: boolean,
  createdAt: Date
}


@Injectable({
  providedIn: 'root'
})
export class CustomersService extends CrudService<Customer> {

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "user")
  }

}
