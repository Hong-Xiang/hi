import { Component, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  inputs: ['task'],
  outputs: ['submit', 'delete']

})
export class TaskItemComponent implements OnInit {
  task: Task;
  submit: EventEmitter<number>;
  delete: EventEmitter<number>;
  constructor() {}

  ngOnInit() {}
}
