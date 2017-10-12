import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from './task.model';
import { TaskHqlfService } from './task-hqlf.service';
import { tasksMock } from './task.mock';

const initialTasks: Task[] = tasksMock;
interface ITaskOperation extends Function {
  (tasks: Task[]): Task[];
}

@Injectable()
export class TaskService {
  tasks: Observable<Task[]>;
  updates: Subject<any> = new Subject<any>();

  newTasks: Subject<Task> = new Subject<Task>();

  create: Subject<Task> = new Subject<Task>();
  read: Subject<number> = new Subject<number>();
  readAll: Subject<void> = new Subject<void>();
  submit: Subject<number> = new Subject<number>();
  del: Subject<number> = new Subject<number>();
  constructor(private taskHqlfService: TaskHqlfService) {
    this.tasks = this.updates
      .scan((tasks: Task[], operation: ITaskOperation) => {
        return operation(tasks);
      }, initialTasks)
      .do((x: any) => {
        console.log('On DO:');
        console.log(x);
      })
      .publishReplay(1)
      .refCount();

    this.create
      .map((task: Task) => {
        this.taskHqlfService.taskCreate(task);
        return (tasks: Task[]) => this.taskHqlfService.tasksReadAll();
      })
      .subscribe(this.updates);
    this.newTasks.subscribe(this.create);

    this.submit
      .map((tid: number) => {
        this.taskHqlfService.taskSubmit(tid);
        return (tasks: Task[]) => this.taskHqlfService.tasksReadAll();
      })
      .subscribe(this.updates);

    this.read
      .map((tid: number) => {
        this.taskHqlfService.taskRead(tid);
        return (tasks: Task[]) => this.taskHqlfService.tasksReadAll();
      })
      .subscribe(this.updates);

    this.readAll
      .map(() => {
        return (tasksOld: Task[]) => {
          const result: Task[] = [];
          this.taskHqlfService.tasksReadAll().subscribe((tasks: Task[]) => {
            for (let t of tasks) {
              result.push(t);
            }
          });
          console.log(result);
          return result;
        };
      })
      .subscribe(this.updates);

    this.del
      .map((tid: number) => {
        this.taskHqlfService.taskDelete(tid);
        return (tasks: Task[]) => this.taskHqlfService.tasksReadAll();
      })
      .subscribe(this.updates);
  }

  onCreate(obj: any): void {
    this.create.next(<any>obj);
  }

  onReadAll(): void {
    this.readAll.next();
  }

  onRead(tid: number): void {
    this.read.next(tid);
  }

  onSubmit(tid: number): void {
    this.submit.next(tid);
  }

  onDelete(tid: number): void {
    this.del.next(tid);
  }
}
