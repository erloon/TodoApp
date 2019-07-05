import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TasksService } from './services/tasks.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {

  constructor(
    private taskService: TasksService,
    public authService: AuthService,
    private route: Router) {

  }

  logout(){
    this.authService.logout();
    this.route.navigate(['/login']);
  }

}

