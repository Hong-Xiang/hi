import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TabElement } from '../../tabview/tab-element.model';
@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.css'],
  inputs: ['element']
})
export class TaskMainComponent implements OnInit {
  element: TabElement;
  data: string = '';
  show: boolean = false;
  constructor() {}

  ngOnInit() {
    this.element.content.subscribe((c: any) => {
      this.data = c.data;
    });
    this.element.activated.subscribe((a: boolean) => {
      this.show = a;
    });
  }
}
