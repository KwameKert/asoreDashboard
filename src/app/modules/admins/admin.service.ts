import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Admin {
  _id ?: string,
  username: string, 
  role: string, 
  email: string, 
  createdAt: Date
}

@Injectable({
  providedIn: 'root'
})
export class AdminService extends CrudService<Admin> {

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "user")
  }

  fetchAllAdmin(){
    return  this._httpClient.get<
      ApiResponse<Admin[]>>(`${this._url}/user/`).toPromise()
  }

  addAdmin(admin: Admin){
    return  this._httpClient.post<
      ApiResponse<User>>(`${this._url}/user/"`, admin).toPromise()
  }



//   protected getQueryString(filter: object) {
//     let queryString = Object.keys(filter).map((key) => {
//         return encodeURIComponent(key) + '=' + encodeURIComponent(filter[key])
//     }).join('&');

//     return queryString
// }


}
