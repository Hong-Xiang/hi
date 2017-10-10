import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabviewComponent } from './tabview/tabview.component';
import { TaskModule } from '../task/task.module';


@NgModule({
  imports: [CommonModule, TaskModule],
  declarations: [TabviewComponent],
  exports: [TabviewComponent],
  providers: []
})
export class TabviewModule {}
