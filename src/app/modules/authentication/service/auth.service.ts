import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../../../models/User';
import {ApiResponse} from '../../../models/ApiResponse'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private _baseUrl :String = environment.api_host;

   private userSubject: BehaviorSubject<User>;
   public user: Observable<User>;
   private response: any;

    constructor(
        private router: Router,
        private _httpClient: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
      return this.userSubject.value;
  }

  login(data: object) {
    this.removeUserDetails();
    return this._httpClient.post<ApiResponse<any>>(`${this._baseUrl}/auth/`, data)
        .pipe(map(data => {
          this.storeData(data);
          this.userSubject.next(data.data.user);
          return data.data;
        })).pipe(map(status=>{
          return status;
        })).toPromise();
}

storeData(response: any){
  localStorage.setItem('user', JSON.stringify(response.data.user));
  localStorage.setItem('token', JSON.stringify(response.data.token));
}

  isLoggedIn() { return !!this.user }


  setUserDetails(authData: any){
    localStorage.setItem("propToken", authData.token);
    localStorage.setItem("username", authData.username);
    localStorage.setItem("userId", authData.userId)
    localStorage.setItem("role", authData.role);
    localStorage.setItem("status", "active" )
  }

  logout() {
    // remove user from local storage and set current user to null
    this.removeUserDetails();
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}

  removeUserDetails(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

}
