import { Component, OnInit } from '@angular/core';
import { IsAuthorizedService }  from 'app/common/services/is-authorized.service';
import {IsAdminService} from "../../../../../common/services/is-admin.service";

@Component({
    moduleId: module.id,
  selector: 'app-top-header',
  templateUrl: 'top-header.component.html',
  styleUrls: ['top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  userEmail: string;
  showEmail: boolean;

  constructor(
      private isAuth: IsAuthorizedService,
      private isAdminService: IsAdminService
  ) {

  }

  isAuthorizated(): boolean {
    return this.isAuth.isUserAuthorized();
  }

  showUserEmail(email: string) {
    this.userEmail = email;
  }

  isAdmin(): boolean {
    return this.isAdminService.isAdmin();
  }

    ngOnInit() {
    }

}
