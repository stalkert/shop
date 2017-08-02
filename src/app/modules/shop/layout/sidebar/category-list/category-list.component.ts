import { Component, OnInit } from '@angular/core';
import {CategoriesService} from 'app/common/services/categories.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    moduleId: module.id,
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.css']

})
export class CategoryListComponent implements OnInit {
  categories: FirebaseListObservable<any>;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
      this.categories = this.categoriesService.getCategories();
  }


}
