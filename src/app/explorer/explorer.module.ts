import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerMainComponent } from './explorer-main/explorer-main.component';
import { ExplorerHeaderComponent } from './explorer-header/explorer-header.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { DirectoryListService } from './directory-list/directory-list.service';
import { ExplorerOpenerComponent } from './explorer-opener/explorer-opener.component';
import { DirectoryModule } from './directory/directory.module';
import { ClarityModule } from 'clarity-angular';
@NgModule({
  imports: [CommonModule, DirectoryModule, ClarityModule],
  declarations: [
    ExplorerMainComponent,
    ExplorerHeaderComponent,
    DirectoryListComponent,
    ExplorerOpenerComponent,
    ExplorerMainComponent
  ],
  exports: [ExplorerMainComponent],
  providers: [DirectoryListService]
})
export class ExplorerModule {}
