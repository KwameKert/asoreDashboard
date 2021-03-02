import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

export interface Member{
  id ?: string,
  firstName ?: string, 
  lastName ?: string, 
  weddingDate?: Date,
  fileUrl?: string,
  imageUrl?: string,
  otherNames ?: string, 
  placeOfBirth ?: string, 
  placeOfResidence ?: string, 
  placeOfBaptism ?: string, 
  contactAddress: string, 
  occupation: string, 
  dateOfBirth ?: Date,
  email: string,
  numOfChildren: number,
  confirmed: string, 
  groupName: string, 
  duesPaymentStatus: string,
  maritalStatus?: string,
  createdAt: Date
}


@Injectable({
  providedIn: 'root'
})
export class MemberService extends CrudService<Member> {

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "member")
  }

  public updateMember(data: any){
    return this._httpClient.put<ApiResponse<any>>(`${this._url}/member`, data).toPromise();
  }
  public addMember(data: any){
    return this._httpClient.post<ApiResponse<any>>(`${this._url}/member`, data).toPromise();
  }

}
