import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Directory } from './directory.model';
import { HqlfapiService } from '../../hqlfapi/hqlfapi.service';
@Injectable()
export class DirectoryHqlfService {
  constructor(private http: Http, private hqlf: HqlfapiService) {}

  private base_url = '/fs/dir/';

  loadBasic(path: string): Observable<Directory> {
    return this.hqlf
      .rGet(this.base_url + this.urlQuotedPath(path))
      .map((r: Response) => r.json())
      .map((obj: any) => {
        return new Directory(obj.path, obj.name, false, obj.children || undefined);
      });
  }

  loadDetail(path: string): Observable<Directory> {
    return this.loadBasic(path);
  }
  private urlQuotedPath(path: string): string {
    return encodeURIComponent(encodeURIComponent(path));
  }
}
