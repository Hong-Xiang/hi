import { Component, OnInit } from '@angular/core';
import { DirectoryListService } from '../directory-list/directory-list.service';
@Component({
  selector: 'app-explorer-opener',
  templateUrl: './explorer-opener.component.html',
  styleUrls: ['./explorer-opener.component.css']
})
export class ExplorerOpenerComponent implements OnInit {
  constructor(private dirsService: DirectoryListService) {}

  ngOnInit() {}

  openDirectory(path: string) {
    if (path) this.dirsService.open(path);
    return false;
  }
}
