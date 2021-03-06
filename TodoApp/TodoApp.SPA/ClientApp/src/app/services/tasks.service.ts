import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpService } from './http.service';


@Injectable()
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTask().subscribe(list=>{
      this.tasksListObs.next(list);
    });
  }

  add(taskList: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(taskList);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  saveTasksInDB() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }
}
