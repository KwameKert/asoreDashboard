import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../modules/shared/service/crud.service';

export interface FleetManager {
  _id ?: string, 
  username : string, 
  name: string, 
  email: string, 
  fullName: string,
  company: string,
  password ?: string,
  status: string,
  createdAt: string, 
}

@Injectable({
  providedIn: 'root'
})
export class FleetManagerService extends CrudService<FleetManager> {

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "user/admin")
  }

  public addManager(data: any){
    return this._httpClient.post<ApiResponse<any>>(`${this._url}/user/admin`, data);
  }

  public listManager(){
   
      return this._httpClient.get<ApiResponse<any>>(`${this._url}/user/manager/query?status=active`).toPromise()
  
  }
 
}
