import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/first';

import { Category } from 'app/models/categories.model';
import { CategoriesService } from 'app/common/services/categories.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CategoryResolveGuard implements Resolve<Category> {

    constructor(
        private categoriesService: CategoriesService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any| null {
        const id = +route.params['id'];

        return this.categoriesService.getCategory(id).map((category) => {
            if (category) {
                return category;
            } else { // id not found
                this.router.navigate(['admin/categories/list']);
                return null;
            }
        }).first();
    }
}
