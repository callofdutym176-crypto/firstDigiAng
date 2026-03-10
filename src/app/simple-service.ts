import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://localhost:44315/api/simple';

  insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/insert`, data);
  }

  get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/GetAll`);
  }
  getById(id: string) {
    return this.http.get(`${this.baseUrl}/GetById/${id}`);
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Edit/${id}`, data);
  }
  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Delete/${id}`);
  }
}
