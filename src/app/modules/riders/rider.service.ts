import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Rider{
  _id ?:  string, 
  firstName: string, 
  lastName: string,
  gender : string, 
  dob: Date,
  status?: string,
  description?: string,
  email: string,
  address: string,
  phone: string,
  company ?: string,
  vehicle ?: any
}

@Injectable({
  providedIn: 'root'
})
export class RiderService extends CrudService<Rider>{

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "rider")
  }

}
