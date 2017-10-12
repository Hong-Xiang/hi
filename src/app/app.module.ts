import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HqlfapiService } from './hqlfapi/hqlfapi.service';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from 'clarity-angular';
import { ExplorerModule } from './explorer/explorer.module';
import { FileService } from './file.service';
import { TabviewModule } from './tabview/tabview.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    ExplorerModule,
    HttpModule,
    TabviewModule,
    ClarityModule.forRoot()
  ],
  providers: [HqlfapiService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
