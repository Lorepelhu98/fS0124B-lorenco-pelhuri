import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    this.users$ = this.todoSrv.mapByUser();
  }

  trackByFn(_index: number, item: User) {
    return item.id;
  }
}
