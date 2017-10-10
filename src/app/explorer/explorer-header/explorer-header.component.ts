import { Component, OnInit, EventEmitter } from '@angular/core';
import { DirectoryListService } from '../directory-list/directory-list.service';
@Component({
  selector: 'app-explorer-header',
  templateUrl: './explorer-header.component.html',
  styleUrls: ['./explorer-header.component.css']
  // outputs: ['onOpenHome']
})
export class ExplorerHeaderComponent implements OnInit {
  // onOpenHome: EventEmitter<string> = new EventEmitter();
  constructor(private dirsService: DirectoryListService) {}

  ngOnInit() {}

  openHome() {
    this.dirsService.open('/hqlf');
    return false;
  }
}
