import { Component } from '@angular/core';
import { TodoListHeaderComponent } from './list/todo-list-header.component';

@Component({
  selector: 'app-root',
  template: `<app-todo-list-header></app-todo-list-header>
<div class="container">
  <router-outlet> </router-outlet>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoapp';
  
}
