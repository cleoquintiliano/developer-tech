import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: TodoItem[] = [ 
    { description: 'Rezar', done: true},
    { description: 'Arrumar a cama', done: false}
  ];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
