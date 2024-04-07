import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUser(): User | null {
    return this._user.value;
  }
  private _user = new BehaviorSubject<User | null>(null);
  get user() {
    return this._user.asObservable();
  }

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')
      .pipe(map(data => data as User))
      .subscribe(user => {
        this._user.next(user);
      });
  }

  register(user: User) {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')
      .pipe(map(data => data as User))
      .subscribe(user => {
        this._user.next(user);
      });
  }

  logout() {
    this._user.next(null);
  }
}
