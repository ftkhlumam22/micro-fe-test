import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Create
  createData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, data).pipe(
      map((response) => response), // Process or transform response if needed
      catchError((error) => throwError(error)) // Error handling logic
    );
  }

  //Get Data By ID
  getDataById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  // Read
  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  // Update
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/posts/${id}`, data).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  // Delete
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }
}
