import { Component, OnInit } from '@angular/core';
import {  Response } from '@angular/http';
import {CategoriesService} from "../../services/categories.service";
import { Category } from "../../models/categories.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']

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
