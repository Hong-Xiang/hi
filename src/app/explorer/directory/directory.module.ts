import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectoryComponent } from './directory.component';
import { DirectoryHqlfService } from './directory-hqlf.service';
import { DirectoryService } from './directory.service';
import { ClarityModule } from 'clarity-angular';
@NgModule({
  imports: [CommonModule, ClarityModule, BrowserAnimationsModule],
  declarations: [DirectoryComponent],
  providers: [DirectoryHqlfService, DirectoryService],
  exports: [DirectoryComponent]
})
export class DirectoryModule {}
