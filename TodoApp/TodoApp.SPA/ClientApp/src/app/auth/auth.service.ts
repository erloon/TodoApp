import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private authState: Observable<User>;
  user: User;

  constructor(public angularFire: AngularFireAuth, private route: Router) {
    angularFire.authState.subscribe(user => {

      this.user = user;
    });
  }

  isAuthenticated(): boolean {
    return this.authState !== null;
  }

  login(email: string, password: string) {
   return this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.route.navigate(['/todoTask']);
      });
  }

  signup(email: string, password: string) {
    return this.angularFire.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.angularFire.auth.signOut();
  }

}
