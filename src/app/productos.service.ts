import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://07fuld1v35.execute-api.us-east-2.amazonaws.com/dev'; 

  constructor(private http: HttpClient) { }
  
  getAllCustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCustomers`);
  }
}
