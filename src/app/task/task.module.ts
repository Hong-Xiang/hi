import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { TaskService } from './task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { TaskMainComponent } from './task-main/task-main.component';
import { TaskHqlfService } from './task-hqlf.service';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [
    TaskItemComponent,
    TaskListComponent,
    TaskMenuComponent,
    TaskMainComponent
  ],
  exports: [TaskMainComponent],
  providers: [TaskService, TaskHqlfService]
})
export class TaskModule {}
