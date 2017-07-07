import {IsAdminService} from "../modules/routing/is-admin.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Observable} from "rxjs/Rx";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private user: IsAdminService, private router: Router) {
  }

  canActivate(): Observable<boolean>|boolean {
    let access = this.user.isAdmin();
    if(!access) {
      this.router.navigate(['/shop']);
      return false;
    } else {
      return true;
    }
  }
}
