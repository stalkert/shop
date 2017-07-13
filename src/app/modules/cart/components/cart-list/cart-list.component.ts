import { Component, OnInit } from '@angular/core';

import {CartService} from "../../../../common/services/cart.service";

import {Product} from 'app/models/products.model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
    products: Product[];
    grandTotalCart: number;
    
	constructor(private cartService: CartService) { }
        
    ngOnInit() {
        this.products = this.cartService.getProductsInCart();
        this.grandTotalCart = this.cartService.getGrandTotalCard();
    }
    onRemoveProductFromCart(product: Product): void {
        this.cartService.removeProductFromCart(product);
    }
    
    getUpdatedGrantTotalCart(): void {
        this.grandTotalCart = this.cartService.getGrandTotalCard();
    }
    


}
