import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export class BaseService<T> {

  url: string = "assets/data/";
  data: T;

  constructor(public http: HttpClient, file: string) {
    this.url += file;
  }
  
  getAll(): Observable<T[]>{
    return this.http.get<T[]>(this.url)
  }

}
