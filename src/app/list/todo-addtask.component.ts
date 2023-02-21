import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { TodoListComponent } from './todo-list.component';
interface Task {
  id: number;
  task: string;
  date: Date;
}

@Component({
  selector: 'app-todo-addtask',
  templateUrl: './todo-addtask.component.html',
  styleUrls: ['./todo-addtask.component.css'],
})
export class TodoAddtaskComponent {
  message: string = '';
  taskItem: Task = {
    id: 1,
    task: '',
    date: new Date(),
  };
  allTasks: Array<Task> = [];

  constructor() {
    let localTasks: string | null = localStorage.getItem('taskitem');
    if (localTasks) {
      this.allTasks = JSON.parse(localTasks);
    }
  }
  addtask(): void {
    let highestTaskId = this.allTasks.length
      ? Math.max(...this.allTasks.map((task: Task) => task.id))
      : 0;
    this.taskItem = {
      ...this.taskItem,
      id: highestTaskId + 1,
    };
    this.allTasks.unshift(this.taskItem);
    localStorage.setItem('taskitem', JSON.stringify(this.allTasks));
    this.message = 'Inserted Successful.......';

    this.taskItem = {
      id: 1,
      task: '',
      date: new Date(),
    };
  }

  clear() {
    this.taskItem = {
      id: 1,
      task: '',
      date: new Date(),
    };
  }
}
