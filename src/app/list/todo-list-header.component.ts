import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit{
  title: string="To-Do App";
  taskitem: any;
  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
    var localdata: any = localStorage.getItem('taskitem')
    this.taskitem = JSON.parse(localdata)
    let highestTaskId =  count(...this.taskitem); 
    console.log("Higher value"+ highestTaskId)
  }
  
  
  
  

}
