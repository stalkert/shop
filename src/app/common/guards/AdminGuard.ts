import {IsAdminService} from '../services/is-admin.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private isAdminService: IsAdminService, private router: Router) {
  }

  canActivate(): Observable<boolean>|boolean {
    const access = this.isAdminService.isAdmin();
    if (!access) {
      this.router.navigate(['/products']);
      return false;
    } else {
      return true;
    }
  }
}
