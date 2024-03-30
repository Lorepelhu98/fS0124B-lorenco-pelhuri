import { Component, Input, OnChanges, SimpleChanges, TrackByFunction } from '@angular/core';
import { Todo } from '../../interfaces/todo.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnChanges {
  todos: Todo[] = [];
  @Input() UserName!: string;
  trackByFn: TrackByFunction<Todo> = (index: number, item: Todo) => item.id;

  constructor(private todoSrv: TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['UserName']) {
      this.todos = this.todoSrv.filterByQuery(this.UserName?.toLowerCase() || "");
    }
  }
}
