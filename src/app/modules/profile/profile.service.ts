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

  public updateProfile(data: any){ 
    return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/user/admin/profile`, data).toPromise();
  }

  public changePassword(data: any){ 
    return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/user/admin/changePassword`, data).toPromise();
  }
}
