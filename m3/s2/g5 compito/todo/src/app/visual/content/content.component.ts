import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    if (this.todoService) {
      const todo = this.todoService.completed;
    } else {
      console.error('TodoService non è difinito');
    }
  }
}
