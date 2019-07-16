import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login(formData: NgForm) {
      this.authService.login(formData.value.email, formData.value.password).catch(err => {
        this.error = err;
      });
  }

  signup(formData: NgForm) {
    this.authService.signup(formData.value.email, formData.value.password)
      .catch(err => {
        this.error = err;
      });
  }
}
