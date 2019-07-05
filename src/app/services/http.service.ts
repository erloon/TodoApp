import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://tasks-cea3.restdb.io/rest/tasks';
  readonly headers = new HttpHeaders().set('x-apikey', '5d0bfe5a52556062830a4653');

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getParams(): HttpParams {
    if (this.authService.user) {
      const uid = this.authService.user.uid;
      const query = { 'userId': uid };
      return new HttpParams().set('q', JSON.stringify(query));
    }
  }
  getTask(): Observable<Array<Task>> {

    return this.http.get<Array<Task>>(this.URL_DB, { headers: this.headers, params: this.getParams() });
  }

  saveTasks(list: Array<Task>) {
    list.forEach(x => {
      this.http.post(this.URL_DB, x, { headers: this.headers, params: this.getParams() }).subscribe();
    });
    console.log(list);
  }
}
