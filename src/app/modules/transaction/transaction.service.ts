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
  public filterByRange(startDate: any, endDate: any){
    return this._httpClient.get<ApiResponse<any>>(`${this._url}/transaction/reconcilliation?startDate=${startDate}&endDate=${endDate}`).toPromise();
  }

  public fetchTransactions(){
    return this._httpClient.get<ApiResponse<any>>(`${this._url}/transaction/all`).toPromise();
  }
  public reconcilePayment(data){
    return this._httpClient.patch<ApiResponse<any>>(`${this._url}/transaction/reconcilliation/pay`, data).toPromise();
  }


}
