import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Rx";

@Injectable()
export class IsAdminService {
  userEmail: string;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isAdmin(): boolean {
       return this.userEmail === 'root@root.ua'
  }
}
