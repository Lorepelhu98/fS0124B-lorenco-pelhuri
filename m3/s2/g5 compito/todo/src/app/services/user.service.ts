import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.service';
import { users } from 'src/assets/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = users;

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
