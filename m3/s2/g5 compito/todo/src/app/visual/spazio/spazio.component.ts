import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../../interfaces/todo.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-spazio',
  templateUrl: './spazio.component.html',
  styleUrl: './spazio.component.scss'
})
export class SpazioComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  _todos: Todo[] = [];

  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoSrv.getTodos();
  }

  get notCompleted(): Observable<Todo[]> {
    return of(this._todos.filter(todo => !todo.completed));
  }

  trackByFn(index: number, item: Todo) {
    return item.id;
  }
}
