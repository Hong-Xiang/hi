import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Task } from './task.model';
import { tasksMock } from './task.mock';
import { HqlfapiService } from '../hqlfapi/hqlfapi.service';
import { Observable } from 'rxjs';
// import 'rxjs/operators/add/of';
@Injectable()
export class TaskHqlfService {
  tasks: Task[] = tasksMock;
  private base_urls = '/tasks';
  private base_url = '/task';
  constructor(private hqlf: HqlfapiService) {}
  tasksReadAll(): Observable<Task[]> {
    return this.hqlf
      .rGet(this.base_urls)
      .map((r: Response) => r.json())
      .map((obj: any) => {
        const result: Task[] = [];
        for (const t of obj) {
          console.log(t);
          result.push(new Task(t));
        }
        return result;
      });
    // return Observable.of(this.tasks);
  }
  taskRead(tid: number): Observable<Task> {
    return Observable.of(this.tasks[tid]);
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
