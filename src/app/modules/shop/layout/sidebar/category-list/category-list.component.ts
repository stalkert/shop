import { Component, OnInit } from '@angular/core';
import {  Response } from '@angular/http';
import {CategoriesService} from 'app/common/services/categories.service';
import { Category } from 'app/models/categories.model';

@Component({
    moduleId: module.id,
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.css']

})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoriesServise: CategoriesService) { }

  ngOnInit() {
    this.categoriesServise.getCategories()
        .subscribe(
            (data:Response) => {
              this.categories = data.json();
            }
        )
  }


}
