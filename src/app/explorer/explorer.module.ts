import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryViewerComponent } from './directory-viewer/directory-viewer.component';
import { ExplorerComponent } from './explorer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectoryViewerComponent, ExplorerComponent],
  exports: []
})
export class ExplorerModule { }
