import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { tasksMock } from './task.mock';

@Injectable()
export class TaskHqlfService {
  tasks: Task[] = tasksMock;
  constructor() {}
  tasksReadAll(): Task[] {
    return this.tasks;
  }
  taskRead(tid: number): Task {
    return this.tasks[tid];
  }
  taskCreate(task: Task): number {
    this.tasks.push(task);
    return this.tasks.length;
  }
  taskSubmit(tid: number): void {
    this.tasks[tid].state = 'Pending';
  }
  taskDelete(tid: number): void {
    this.tasks.splice(tid, 1);
  }
}
