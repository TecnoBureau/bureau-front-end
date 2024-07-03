import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}/${environment.apiVersion}/api`;

  constructor(private http: HttpClient) {}

  sendData(route: string, body: object) {
    return this.http.post(`${this.apiUrl}${route}`, body);
  }

  getData(route: string) {
    return this.http.get(`${this.apiUrl}${route}`);
  }
}
