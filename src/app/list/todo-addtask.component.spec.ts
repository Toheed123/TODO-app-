import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddtaskComponent } from './todo-addtask.component';

describe('TodoAddtaskComponent', () => {
  let component: TodoAddtaskComponent;
  let fixture: ComponentFixture<TodoAddtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
