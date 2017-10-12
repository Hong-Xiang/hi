import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabviewComponent } from './tabview/tabview.component';
import { TaskModule } from '../task/task.module';
import { TabComponent } from './tab/tab.component';
import { TabviewService } from './tabview.service';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports: [CommonModule, TaskModule, ClarityModule],
  declarations: [TabviewComponent, TabComponent],
  exports: [TabviewComponent],
  providers: [TabviewService]
})
export class TabviewModule {}
