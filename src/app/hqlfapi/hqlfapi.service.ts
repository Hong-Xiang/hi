import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class HqlfapiService {
  base_url = 'http://10.168.3.111:5000/api/v0.2';
  constructor(public http: Http) {}
  rGet(url: string): Observable<any> {
    return this.http.get(this.base_url + url);
  }
  rPost(url: string, body: any): Observable<any> {
    return this.http.post(this.base_url + url, body);
  }
  rPut(url: string, body: any): Observable<any> {
    return this.http.put(this.base_url + url, body);
  }
  rPatch(url: string, body: any): Observable<any> {
    return this.http.patch(this.base_url + url, body);
  }
  rDelete(url: string): Observable<any> {
    return this.http.get(this.base_url + url);
  }
}
