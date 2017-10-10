import { Component, OnInit } from '@angular/core';
import { DirectoryListService } from './directory-list.service';
@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {
  roots: string[] = [];
  constructor(private dirsService: DirectoryListService) {}
  ngOnInit() {
    this.roots = this.dirsService.roots;
  }
}
