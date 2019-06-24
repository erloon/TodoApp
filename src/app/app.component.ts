import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {

  constructor(private taskService: TasksService){

  }

}

