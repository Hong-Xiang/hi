import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from './task.service';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { TaskMainComponent } from './task-main/task-main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskMenuComponent,
    TaskMainComponent
  ],
  exports: [TaskMainComponent],
  providers: [TaskService]
})
export class TaskModule {}
