import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  b1: string = 'Add New Task ';

  taskitem: any;
  date1: Date = new Date();

  ngOnInit(): void {
    var localdata: any = localStorage.getItem('taskitem');
    this.taskitem = JSON.parse(localdata);
    console.log(localdata.item);
  }
  remove(da: string, i: number) {
    var ind = this.taskitem.indexOf(this.taskitem[i]);

    if (ind > -1) {
      this.taskitem.splice(ind, 1);
      localStorage.removeItem(this.taskitem);
    }
    let a = localStorage.setItem('taskitem', JSON.stringify(this.taskitem));
  }
}
