import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectoryListComponent } from '../directory-list/directory-list.component';
@Component({
  selector: 'app-explorer-main',
  templateUrl: './explorer-main.component.html',
  styleUrls: ['./explorer-main.component.css']
})
export class ExplorerMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openDirectory(path: string) {}
}
