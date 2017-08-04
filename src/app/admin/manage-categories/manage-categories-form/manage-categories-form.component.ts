import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Category } from 'app/models/categories.model';
import { CategoriesService } from 'app/common/services/categories.service';
import { DialogService }  from 'app/common/services/dialog.service';
@Component({
    selector: 'app-manage-categories-form',
    templateUrl: './manage-categories-form.component.html',
    styleUrls: ['./manage-categories-form.component.css']
})
export class ManageCategoriesFormComponent implements OnInit, OnDestroy {
    category: Category;
    oldCategory: Category;
    
    constructor(
        private categoriesService: CategoriesService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService
    ) { }
    
    ngOnInit(): void {
        this.category = new Category(null, '', null, '');
        
        /*    this.route.params
         .switchMap((params: Params) => this.userArrayService.getUser(+params['id']))
         .subscribe(
         user => {
         this.user = Object.assign({}, user);
         this.oldUser = user;
         },
         err => console.log(err)
         );*/
        this.route.data.forEach((data: { category: Category }) => {
            this.category = Object.assign({}, data.category);
            this.oldCategory = data.category;
        });
        
    }
    
    ngOnDestroy(): void {
    }
    
    saveCategory() {
        const category = new Category(
            this.category.id,
            this.category.name,
            0,
            this.category.img
        );
        
        if (category.id) {
            this.categoriesService.updateCategory(category);
            this.oldCategory = this.category;
            this.router.navigate(['admin/categories/edit', {id: category.id}]);
        }
        else {
            this.categoriesService.addCategory(category);
            this.oldCategory = this.category;
            this.router.navigate(['admin/categories/list']);
        }
    }
    
    goBack() {
        this.router.navigate(['./../../'], { relativeTo: this.route});
    }
    
/*    canDeactivate(): Promise<boolean> | boolean {
        if (!this.oldUser || this.oldUser.firstName === this.user.firstName) {
            return true;
        }
        
        return this.dialogService.confirm('Discard changes?');
    }*/
    
}
