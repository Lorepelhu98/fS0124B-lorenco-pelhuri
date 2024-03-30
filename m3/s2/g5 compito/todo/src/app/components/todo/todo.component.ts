import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo!: Todo;
toggleTodoStatus: any;

  constructor(private todoService: TodoService) {}

  toggleTodoCompletion(): void {
    if (this.todo) {
      this.todoService.toggleTodoStatus(this.todo.id);
    }
  }
}
