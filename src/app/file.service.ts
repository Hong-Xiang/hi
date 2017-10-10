import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FileService {
  constructor() {}
  open(path: string) {
    console.log('Open file: ' + path);
  }
}
