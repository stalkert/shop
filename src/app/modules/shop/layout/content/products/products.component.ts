import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/products.model';
import { ProductsService } from 'app/common/services/products.service';
import {  Response } from '@angular/http';

@Component({
    moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
	products: Product[];
    test: any;
  constructor( public productsService: ProductsService) { }

  ngOnInit() {
      this.test = { test: 1};
      this.productsService.getProducts()
        .subscribe(
            (data:Response) => {
              this.products = data.json();
            }
        )
  }

}
