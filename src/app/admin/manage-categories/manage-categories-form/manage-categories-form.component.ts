import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from 'app/models/categories.model';
import { CategoriesService } from 'app/common/services/categories.service';
import { DialogService } from 'app/common/services/dialog.service';

@Component({
    selector: 'app-manage-categories-form',
    templateUrl: './manage-categories-form.component.html',
    styleUrls: ['./manage-categories-form.component.css']
})
export class ManageCategoriesFormComponent implements OnInit, OnDestroy {
    category: Category;
    oldCategory: Category;

    constructor(private categoriesService: CategoriesService,
                private route: ActivatedRoute,
                private router: Router,
                private dialogService: DialogService) {
    }

    ngOnInit(): void {
        const img = '//cdn.shopify.com/s/files/1/1402/6971/t/2/assets/birthday-gifts.png?3417794890851504925';
        this.category = new Category(null, '', 0, img);
        this.route.data.subscribe((data: { category: Category }) => {
            if (data.category) {
                this.category = Object.assign({}, data.category);
            }
        });
    }

    ngOnDestroy(): void {
    }

    saveCategory() {
        const category = new Category(
            this.category.id,
            this.category.name,
            this.category.count || 0,
            this.category.img || '//cdn.shopify.com/s/files/1/1402/6971/t/2/assets/birthday-gifts.png?3417794890851504925'
        );

        if (category.id) {
            this.categoriesService.updateCategory(category);
            this.oldCategory = this.category;
            this.router.navigate(['admin/categories/list']);
        } else {
            this.route.params.subscribe((params) => {
                this.category.id = +params['nextId'];
                this.categoriesService.addCategory(this.category);
                //this.oldCategory = this.category;
                this.router.navigate(['admin/categories/list']);
            });

        }
    }

    goBack() {
        this.router.navigate(['admin/categories/list']);
    }

/*    canDeactivate(): Promise<boolean> | boolean {
        if (!this.oldUser || this.oldUser.firstName === this.user.firstName) {
            return true;
        }

        return this.dialogService.confirm('Discard changes?');
    }*/

}
