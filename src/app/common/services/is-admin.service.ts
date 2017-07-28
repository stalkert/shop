import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IsAuthorizedService } from './is-authorized.service';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Rx";

@Injectable()
export class IsAdminService {
  userEmail: string;
  constructor(private isAuthorizedService: IsAuthorizedService) {
  }

  isAdmin(): boolean {
       return this.isAuthorizedService.isUserAuthorized()
          ?
          this.isAuthorizedService.getUserEmail() === 'root@root.ua'
          :
          false;
  }
}
