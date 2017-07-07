import { Component, OnInit } from '@angular/core';
import { IsAuthorizedService }  from '../../services/is-authorized.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  userEmail: string;
  showEmail: boolean;

  constructor(private isAuth: IsAuthorizedService) {

  }

  isAuthorizated(): boolean {
    return this.isAuth.isUserAuthorized();
  }

/*  showUserEmail(email){
    if (email) {
      this.emailUser = email;
      this.showEmail = true;

    } else {
      this.showEmail = false;
    }
  }*/

  showUserEmail(email: string){
    this.userEmail = email;
/*
    this.user.checkLoginUser();
    if(this.user.isAuthorized) {
      this.emailUser = this.user.emailUser;
      return true;
    } else {
      return false;
    }*/
  }

  isAdmin() {
    return false;
    /*this.user.checkLoginUser();
    return this.user.emailUser === 'root@root.ua'*/

  }

    ngOnInit() {
    }

}
