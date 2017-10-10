import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { File } from '../../file.model';
import { Directory, IGeneralFile } from './directory.model';
import { DirectoryHqlfService } from './directory-hqlf.service';
import { FileService } from '../../file.service';
const initialDirectorys: Directory[] = [];
interface IDirectoryOperation extends Function {
  (Directorys: Directory[]): Directory[];
}

@Injectable()
export class DirectoryService {
  // roots: Observable<Directory[]>;
  // private updates: Subject<any> = new Subject<any>();

  // private rootToOpen: Subject<string> = new Subject<string>();
  // private toLoad: Subject<Directory> = new Subject<Directory>();
  // private toClose: Subject<Directory> = new Subject<Directory>();

  // private toPush: Subject<Directory> = new Subject<Directory>();
  // private toReplace: Subject<Directory> = new Subject<Directory>();

  constructor(
    private hqlf: DirectoryHqlfService,
    private fileService: FileService
  ) {
    // this.roots = this.updates
    //   .scan((directorys: Directory[], operation: IDirectoryOperation) => {
    //     let result = directorys.copyWithin(directorys.length, 0)
    //     return operation(result);
    //   }, initialDirectorys)
    //   .publishReplay(1)
    //   .refCount();
    // this.openedRoot
    //   .map((path: string) => {
    //     const nd = this.hqlf.loadBasic(path);
    //     return (dirs: Directory[]) => this.updateOrPush(dirs, nd);
    //   })
    //   .subscribe(this.updates);
    // this.load
    //   .map((dir: Directory) => {
    //     const nd = this.hqlf.loadDetail(dir.path);
    //     return (dirs: Directory[]) => this.findAndReplace(dirs, nd);
    //   })
    //   .subscribe(this.updates);
    // this.close.subscribe((dir: Directory) => {
    //   console.log(dir);
    // });
  }

  // findAndReplace(
  //   resources: Array<Directory | File>,
  //   newDir: Directory
  // ): Array<Directory | File> {
  //   const result: Array<Directory | File> = [];
  //   for (let s of resources) {
  //     if (s instanceof File) {
  //       result.push(new File(s.path, s.name, s.contents));
  //       continue;
  //     } else {
  //       if (s.path == newDir.path)
  //         result.push(new Directory(newDir.path, newDir.name, newDir.children));
  //       else {
  //         let newChildren: Array<Directory | File>;
  //         if (s.children && s.mayHasDescendant(newDir)) {
  //           newChildren = this.findAndReplace(s.children, newDir);
  //         } else newChildren = s.children.copyWithin(s.children.length, 0);
  //         result.push(new Directory(s.path, s.name, newChildren));
  //       }
  //     }
  //   }
  //   return result;
  // }

  private updateOrPush(dirs: Directory[], target: Directory) {
    // let found = false;
    // for (let i = 0; i < dirs.length; i++) {
    //   let d = dirs[i];
    //   if (d.path == target.path) {
    //     result.push(nd);
    //     found = true;
    //   }
    // }
    // }
    // if (!found) result.push(nd);
    // return result;
  }

  open(path: string): Observable<Directory> {
    return this.hqlf.loadBasic(path);
  }

  openFile(path: string): void {
    this.fileService.open(path);
  }

  load(dir: Directory): Observable<Directory> {
    return this.open(dir.path);
  }
}
