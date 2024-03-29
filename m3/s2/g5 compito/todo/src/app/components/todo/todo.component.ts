import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
toggleTodoStatus(arg0: number) {
throw new Error('Method not implemented.');
}
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  toggleTodoCompletion(id: number): void {
    this.todoService.toggleTodoStatus(id);
  }

}
