import { Component, OnInit, EventEmitter } from '@angular/core';
import { Directory } from './directory.model';
import { DirectoryService } from './directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  inputs: ['path', 'isRoot']
})
export class DirectoryComponent implements OnInit {
  // root: Directory;
  // id: number;
  isRoot: boolean;
  path: string;
  expanded: boolean;
  root: Directory;
  constructor(private service: DirectoryService) {
    this.expanded = false;
  }

  ngOnInit() {
    this.service.open(this.path).subscribe((d: Directory) => {
      this.root = d;
    });
  }

  expand() {
    // if (!this.root.children)
    //   this.service.load(this.root).subscribe((d: Directory) => {
    //     this.root = d;
    //   });
    this.expanded = !this.expanded;
  }

  open(path: string) {
    this.service.openFile(path);
  }
}
