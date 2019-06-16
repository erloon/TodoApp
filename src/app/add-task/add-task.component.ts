import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksService : TasksService) { }

  newTask:string;

  ngOnInit() {
  }

  add(){
    const task: Task = ({name: this.newTask, create: new Date()});
    this.tasksService.add(task);
    this.newTask = '';
  }
}
