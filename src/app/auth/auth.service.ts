import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: User;

  constructor(public angularFire: AngularFireAuth, private route: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.route.navigate(['/todoTask']);
      }).catch(err => {
        console.log(err);
      });
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      }).catch(err => {
        console.log(err);
      });
  }

  logout() {
    this.angularFire.auth.signOut();
  }

}
