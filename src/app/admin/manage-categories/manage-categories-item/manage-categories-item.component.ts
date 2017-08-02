import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'app/models/categories.model';

@Component({
  selector: '[app-manage-categories-item]',
  templateUrl: './manage-categories-item.component.html',
  styleUrls: ['./manage-categories-item.component.css']
})
export class ManageCategoriesItemComponent implements OnInit {
    @Input() category: Category;

    constructor() { }

    ngOnInit() {
    }

}
