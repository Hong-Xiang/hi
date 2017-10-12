import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  nbTasks: number = 0;
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.taskService.tasks.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.nbTasks = tasks.length;
    });
  }
}
