import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.service';
import { todos } from '../services/todo.service';
import { UserService } from './user.service';
import { User } from '../interfaces/user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = todos;
  completed: Todo[] | undefined;
  notCompleted: Todo[] = [];
  _users: User[] = [];



  constructor(private userSrv: UserService) {
    this.assignUsersToTodos();
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }

  getPendingTodos(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }
   assignUsersToTodos(): void {
    this.todos.forEach(todo => {
      todo.user = this.userSrv.getUserById(todo.userId);
    });
  }

  toggleTodoStatus(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    } else {
      console.error('not found');
    }
  }

  getUsersWithTheirTodos(): User[] {
    return this.userSrv.getAllUsers().map(user => {
      user.todos = this.getAllTodos().filter(todo => todo.userId === user.id);
      return user;
    });
  }

  filterByQuery(query: string): Todo[] {
    return this.todos.filter(todo => todo.title.toLowerCase().includes(query));
  }

  mapByUser(): Observable<User[]> {
    return of(this._users);
  }
}
export { todos };

