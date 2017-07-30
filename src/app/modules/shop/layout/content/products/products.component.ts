import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/products.model';
import { ProductsService } from 'app/common/services/products.service';
import {  Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
    products: FirebaseListObservable<any>;
    test: any;
  constructor( public productsService: ProductsService) { }

  ngOnInit() {
      this.products = this.productsService.getProducts();
  }

}
