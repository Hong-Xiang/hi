import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { HeaderComponent } from './header/header.component';
import { ExplorerModule } from './explorer/explorer.module';
import { HqlfapiService } from './hqlfapi/hqlfapi.service';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, TaskModule, ExplorerModule],
  providers: [HqlfapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
