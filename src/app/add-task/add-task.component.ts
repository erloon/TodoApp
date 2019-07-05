import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksService: TasksService, private authService: AuthService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  add() {
    const taskList = this.createTaskList();
    this.tasksService.add(taskList);
    this.addForm = this.initForm();
  }

  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

  createTaskList(): Array<Task> {
    const taskList = new Array<Task>();
    const taskArr = <[string]>this.addForm.get('taskName').value;
    taskArr.forEach(taskName => {
      const task = ({ name: taskName, userId: this.authService.user.uid, create: new Date().toLocaleString(), isDone: false });
      taskList.push(task);
    });
    return taskList;
  }
}
