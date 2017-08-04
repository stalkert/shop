import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'app/models/categories.model';

@Component({
  selector: '[app-manage-categories-item]',
  templateUrl: './manage-categories-item.component.html',
  styleUrls: ['./manage-categories-item.component.css']
})
export class ManageCategoriesItemComponent implements OnInit {
    @Input() category: Category;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }
    
    editCategory() {
        const link = ['admin/categories/edit', this.category.id];
        this.router.navigate(link);
    }

}
