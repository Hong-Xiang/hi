import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.css']
})
export class TaskMenuComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit() {}
  onReadAll() {
    console.log('onReadAll() called.');
    this.taskService.onReadAll();
  }
}
