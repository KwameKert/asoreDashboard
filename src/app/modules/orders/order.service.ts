import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Order {
  _id ?: string,
  item: string,
  itemDetais ?: string, 
  notes ?: string, 
  startDestinationLong: number,
  endDestinationLong: number,
  startDestinationLat: number,
  endDestinationLat: number,
  status : string, 
  owner: any

}

@Injectable({
  providedIn: 'root'
})
export class OrderService  extends CrudService<Order>{

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "order")
  }

}