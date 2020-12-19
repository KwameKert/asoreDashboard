import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _url :String = environment.api_host;
  
  constructor(public _httpClient: HttpClient) {
  }

  public fetchReconcilliations(){
    return this._httpClient.get<ApiResponse<any>>(`${this._url}/transaction/reconcilliation`).toPromise();
  }
}
