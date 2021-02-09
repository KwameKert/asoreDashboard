import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _baseUrl :String = environment.api_host;
  constructor( private _httpClient: HttpClient) { }
  

  public fetchProfile(){
    return this._httpClient.get<ApiResponse<any>>(`${this._baseUrl}/user/admin/profile`).toPromise();
  }
  public fetchManagerProfile(){
    return this._httpClient.get<ApiResponse<any>>(`${this._baseUrl}/user/manager/profile`).toPromise();
  }

  public updateProfile(data: any){ 
    return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/user/admin/profile`, data).toPromise();
  }

  public updateManagerProfile(data: any){ 
    return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/user/manager/profile`, data).toPromise();
  }

  public changePassword(data: any){ 
    return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/user/admin/changePassword`, data).toPromise();
  }
  public changeManagerPassword(data: any){ 
    return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/user/manager/changePassword`, data).toPromise();
  }


}
