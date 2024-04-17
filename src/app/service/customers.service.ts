import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'https://o8rn447hi5.execute-api.us-east-2.amazonaws.com/dev'; 

  constructor(private http: HttpClient) { }
  
  fetchAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customers`);
  }

  fetchCustomersXCedula(cedula: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customer?`,  { params: { cedula } });
  }
}
