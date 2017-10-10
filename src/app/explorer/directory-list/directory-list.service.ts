import { Injectable } from '@angular/core';
@Injectable()
export class DirectoryListService {
  roots: string[] = [];
  constructor() {}

  open(path: string) {
    console.log('open dir: ' + path);
    if (this.roots.indexOf(path) < 0) this.roots.push(path);
  }

  close(path: string) {
    console.log('close dir' + path);
    if (this.roots.indexOf(path) >= 0)
      this.roots.splice(this.roots.indexOf(path), 1);
  }
}
