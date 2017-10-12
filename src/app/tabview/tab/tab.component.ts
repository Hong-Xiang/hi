import { Component, OnInit } from '@angular/core';
import { TabElement, IContent } from '../tab-element.model';
import { TabviewService } from '../tabview.service';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  inputs: ['element']
})
export class TabComponent implements OnInit {
  label: string;
  element: TabElement;
  activated: boolean;
  constructor(private service: TabviewService) {}
  ngOnInit() {
    this.element.content.subscribe((c: IContent) => {
      this.label = c.label;
    });
    this.element.activated.subscribe((a: boolean) => {
      this.activated = a;
    });
  }

  close() {
    this.service.close(this.element.id);
  }

  active() {
    this.service.active(this.element.id);
  }
}
