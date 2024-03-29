import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-spazio',
  templateUrl: './spazio.component.html',
  styleUrl: './spazio.component.scss'
})
export class SpazioComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoSrv.notCompleted;
  }

  trackByFn(index: number, item: Todo) {
    return item.id;
  }
}
