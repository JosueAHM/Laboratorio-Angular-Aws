import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'https://b8hlgtosk3.execute-api.us-east-2.amazonaws.com/DEV'; 

  constructor(private http: HttpClient) { }
  
  getAllLibros(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_all_books`);
  }
}
