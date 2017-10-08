import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HqlfapiService } from './hqlfapi.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [],
  providers: [HqlfapiService],
  exports: []
})
export class HqlfapiModule {}
