import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataloadService  {

  constructor(public http: HttpClient) {
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('document',file, file.name);
    const uploadReq = new HttpRequest('POST', `${environment.api_host}/upload`, formData);
    return this.http.request(uploadReq);
  }

}
