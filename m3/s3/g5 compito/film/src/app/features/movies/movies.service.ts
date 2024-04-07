import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Imovie } from '../../Models/imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Imovie[]> {
    return this.http.get<Imovie[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError(error => {
        console.error('Error fetching movies', error);
        return throwError(error);
      })
    );
  }

  getMovie(id: string): Observable<Imovie> {
    return this.http.get<Imovie>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
