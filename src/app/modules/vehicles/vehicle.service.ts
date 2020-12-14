import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Vehicle{
  _id: string,
  mileage : number,
  model: string, 
  description: string,
  brand: string,
  year: string,
  fuelType: string,
  capacity: number, 
  color: string, 
  status ?: string,
  owner ?: string
}


@Injectable({
  providedIn: 'root'
})
export class VehicleService extends  CrudService<Vehicle>{

  private baseUrl :String = environment.api_host;
  // private _baseUrl :String = environment.api_host;

  constructor(public _httpClient: HttpClient) {
    super(_httpClient, 'vehicle')
   }

   fetchVehicles(data){
    return this._httpClient.get<ApiResponse<any>>(`${this.baseUrl}/vehicle/manager/query?status=${data}`).toPromise();
   }

   


}
