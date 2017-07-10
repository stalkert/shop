import { Component, OnInit } from '@angular/core';
import { IsAuthorizedService }  from 'app/common/services/is-authorized.service';

@Component({
  selector: 'app-top-header',
  templateUrl: 'top-header.component.html',
  styleUrls: ['top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  userEmail: string;
  showEmail: boolean;

  constructor(private isAuth: IsAuthorizedService) {

  }

  isAuthorizated(): boolean {
    return this.isAuth.isUserAuthorized();
  }

  showUserEmail(email: string){
    this.userEmail = email;
  }

  isAdmin() {
    return false;
    /*this.user.checkLoginUser();
    return this.user.emailUser === 'root@root.ua'*/

  }

    ngOnInit() {
    }

}
