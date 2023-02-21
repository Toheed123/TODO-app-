import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './list/todo-list.component';
import { TodoListHeaderComponent } from './list/todo-list-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoAddtaskComponent } from './list/todo-addtask.component';
import { TodoEditComponent } from './list/todo-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    
    TodoAddtaskComponent,
    TodoEditComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    RouterModule.forRoot([
     
      {path:'list', component: TodoListComponent},
      // {path:'new-register', component: TodoRegisterComponent},
      
      {path:'add-todo', component:TodoAddtaskComponent},
      {path:'edit/:id', component:TodoEditComponent},
      {path: '', redirectTo:'list', pathMatch:'full'},
      {path: '**', redirectTo:'list', pathMatch:'full'}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
