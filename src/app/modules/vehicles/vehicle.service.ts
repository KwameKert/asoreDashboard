import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


  // private _baseUrl :String = environment.api_host;

  constructor(public _httpClient: HttpClient) {
    super(_httpClient, 'vehicle')
   }


}
