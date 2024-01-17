import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Create
  createData(data: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, data).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  //Get Data By ID
  getDataById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  // Read
  getAllData(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  // Update
  updateData(id: number, data: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/posts/${id}`, data).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  // Delete
  deleteData(id: number): Observable<object> {
    return this.http.delete(`${this.apiUrl}/posts/${id}`).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }
}
