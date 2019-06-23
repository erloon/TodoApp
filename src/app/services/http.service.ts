import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://tasks-cea3.restdb.io/rest/tasks';
  readonly headers = new HttpHeaders().set('x-apikey', '5d0bfe5a52556062830a4653');

  constructor(private http: HttpClient) {
    this.getTask();
  }

  getTask() : Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { headers: this.headers });
  }

  saveTasks(list: Array<Task>) {
    list.forEach(x => {
      this.http.post(this.URL_DB, x, { headers: this.headers }).subscribe();
    });
    console.log(list);
  }
}
