import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  inputs: ['taskList']
})
export class TaskListComponent implements OnInit {
  taskList: Task[];
  constructor() {}
  ngOnInit() {}
}
