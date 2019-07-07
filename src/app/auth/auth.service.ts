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
