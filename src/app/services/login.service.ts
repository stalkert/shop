import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginService {

  constructor(private afAuth: AngularFireAuth) { }

  login(login, password) {
     return this.afAuth.auth.signInWithEmailAndPassword(login, password);
  }
}
