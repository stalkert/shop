import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {CategoriesService} from 'app/common/services/categories.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-manage-categories-list',
  templateUrl: './manage-categories-list.component.html',
  styleUrls: ['./manage-categories-list.component.css']
})
export class ManageCategoriesListComponent implements OnInit {
    categories: FirebaseListObservable<any>;
    nextId: number;

    constructor(
        private categoriesService: CategoriesService,
        private router: Router
    ) { }

    ngOnInit(): void {
         this.categoriesService.getCategories().subscribe((categories) => {
            this.nextId = categories[categories.length - 1].id +1;
             this.categories = categories;
        });
    }

    addCategory() {
        this.router.navigate(['admin/categories/create', this.nextId]);
    }

}
