import { Component, OnInit } from '@angular/core';
import { TabElement } from '../tab-element.model';
import { TabviewService } from '../tabview.service';
@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent implements OnInit {
  tabs: TabElement[];
  constructor(private service: TabviewService) {}
  ngOnInit() {
    this.tabs = this.service.tabs;
    console.log(this.tabs);
  }
}
