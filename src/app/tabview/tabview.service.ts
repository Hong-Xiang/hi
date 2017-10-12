import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TabElement, TabId } from './tab-element.model';

@Injectable()
export class TabviewService {
  tabs: TabElement[] = [];
  constructor() {
    this.tabs.push(
      new TabElement(
        { key: '1', componentName: 'c1' },
        { label: 'Tab1', data: 'content 1' },
        true
      )
    );
    this.tabs.push(
      new TabElement(
        { key: '2', componentName: 'c1' },
        { label: 'Tab2', data: 'content 2' },
        false
      )
    );
  }

  close(id: TabId) {
    let idx = this.indexOfElement(id);
    this.tabs.splice(idx, 1);
  }
  open(id: TabId, label: string, content: any) {
    let idx = this.indexOfElement(id);
    if (idx == -1) this.tabs.push(new TabElement(id, content));
    else this.tabs[idx].updateContent(content);
  }
  active(id: TabId) {
    let idx = this.indexOfElement(id);
    if (idx > -1) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (i == idx) continue;
        this.tabs[i].deactive();
      }
      this.tabs[idx].active();
    }
  }
  updateContent(id: TabId, content: any) {
    let idx = this.indexOfElement(id);
    if (idx >= 0) this.tabs[idx].updateContent(content);
  }
  indexOfElement(id: TabId) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (
        this.tabs[i].id.key == id.key &&
        this.tabs[i].id.componentName == id.componentName
      )
        return i;
    }
    return -1;
  }
}
