import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';


@Injectable()
export class TasksService {

  tasksList: Array<Task> = [];
  tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>(this.tasksList);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>(this.tasksDone);

  constructor() {
    this.tasksList = [
      { name: 'Zadanie 1', create: new Date() },
      { name: 'Zadanie 2', create: new Date() },
      { name: 'Zadanie 3', create: new Date() },
      { name: 'Zadanie 4', create: new Date() }
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
