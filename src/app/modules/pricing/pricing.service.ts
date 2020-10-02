import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Setting {
  _id ?: string, 
  amountPerMin: number,
  amountPerMeter: number, 
  flatRate: number,
  status: number,
  description: string,
  createdAt: Date
}
@Injectable({
  providedIn: 'root'
})
export class PricingService extends CrudService<Setting>{

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "setting")
  }


  fetchSettings(){
    return  this._httpClient.get<ApiResponse<any>>(`${this._url}/setting/`).toPromise()
  }


}
