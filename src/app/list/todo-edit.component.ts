import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  taskItem: any;
  taskId: number;
  allTasks: Array<any> = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    let localdata: any = localStorage.getItem('taskitem');
    this.allTasks = JSON.parse(localdata);
    this.taskItem = this.allTasks.find((task: any) => task.id == this.taskId);
  }

  ngOnInit(): void {
    
  }

  update() {
    console.log(this.taskItem)
    this.allTasks = this.allTasks.map((task: any) => {
      if (task.id === this.taskId) {
        return this.taskItem;
      } else {
        return task;
      }
    })
    localStorage.setItem('taskitem', JSON.stringify(this.allTasks));
    this.router.navigate(['/list'])
  }
  
  // validation1 = new FormGroup({
  //   textbox58: new FormControl('',Validators.required)})
}
