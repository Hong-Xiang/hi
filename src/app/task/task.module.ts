import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from './task.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TaskListComponent, TaskItemComponent],
  exports: [TaskListComponent, TaskItemComponent],
  providers: [TaskService]
})
export class TaskModule {}
