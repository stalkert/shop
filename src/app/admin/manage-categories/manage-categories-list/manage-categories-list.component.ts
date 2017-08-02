import { Component, OnInit } from '@angular/core';
import {CategoriesService} from 'app/common/services/categories.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-manage-categories-list',
  templateUrl: './manage-categories-list.component.html',
  styleUrls: ['./manage-categories-list.component.css']
})
export class ManageCategoriesListComponent implements OnInit {
    categories: FirebaseListObservable<any>;

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.categories = this.categoriesService.getCategories();
    }

}
