import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxServiceService {

  private baseUrl = 'http://localhost:3000/api/boxes';

  constructor(private http: HttpClient) {}

  getSquares(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  addSquare(square: { title: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, square);
  }

  deleteSquare(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getSquareById(id: number): Observable<{ id: number; title: string }> {
    return this.http.get<{ id: number; title: string }>(`${this.baseUrl}/${id}`);
  }

}
