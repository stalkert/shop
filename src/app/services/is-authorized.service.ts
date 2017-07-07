import { Injectable } from '@angular/core';

@Injectable()
export class IsAuthorizedService {
  isAuthorized: boolean = false;
  userEmail: string = '';

  checkLoginUser(){
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  userNotLogined(): void {
    this.isAuthorized = false;
  }

  userLogined(): void {
    this.isAuthorized = true;
  }

  isUserAuthorized(): boolean {
    return this.isAuthorized;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
  setUserEmail(email: string): void {
      this.userEmail = email;
  }

}
