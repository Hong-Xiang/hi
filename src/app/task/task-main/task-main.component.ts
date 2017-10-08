import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { tasks } from '../task.mock';
@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.css']
})
export class TaskMainComponent implements OnInit {
  tasks: Task[] = tasks;
  constructor() {}

  ngOnInit() {
    console.log(this.tasks);
  }
}
