import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory.component';
import { DirectoryHqlfService } from './directory-hqlf.service';
import { DirectoryService } from './directory.service';
@NgModule({
  imports: [CommonModule],
  declarations: [DirectoryComponent],
  providers: [DirectoryHqlfService, DirectoryService],
  exports: [DirectoryComponent]
})
export class DirectoryModule {}
