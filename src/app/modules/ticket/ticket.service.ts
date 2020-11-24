import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';

@Injectable({
  providedIn: 'root'
})
export class TicketService  extends CrudService<any>{

  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "ticket")
  }

  public updateTicketStatus(data: any){
    return this._httpClient.post<ApiResponse<any>>(`${this._url}/ticket/update`, data).toPromise()
  }
  public assignTicket(data: any){
    return this._httpClient.post<ApiResponse<any>>(`${this._url}/ticket/assign`, data).toPromise()
  }

  public fetchMyTickets(){
    return this._httpClient.get<ApiResponse<any>>(`${this._url}/ticket/assigned`).toPromise()
  }

}