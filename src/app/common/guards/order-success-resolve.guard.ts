import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class OrderSuccessResolveGuard implements Resolve<{firstName: string, lastName: string}> {
    
    constructor(
        private router: Router
    ) {}
    
    resolve(route: ActivatedRouteSnapshot): {firstName: string, lastName: string}| null {
        if (route.params['firstName'] || route.params['lastName']) {
            return {firstName: route.params['firstName'], lastName: route.params['lastName']};
        } else {
            this.router.navigate(['cart']);
            return null;
        }
    }
}
