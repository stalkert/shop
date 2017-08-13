import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'app/common/services/cart.service';
import { Product } from 'app/models/products.model';


@Component({
    moduleId: module.id,
  selector: 'app-cart-list',
  templateUrl: 'cart-list.component.html',
  styleUrls: ['cart-list.component.css']
})
export class CartListComponent implements OnInit {
    products: Product[];
    grandTotalCart: number;

	constructor(
	    private cartService: CartService,
        private router: Router) { }

    ngOnInit() {
        this.products = this.cartService.getProductsInCart();
        this.grandTotalCart = this.cartService.getGrandTotalCard();
    }
    onRemoveProductFromCart(product: Product): void {
        setTimeout(() => {
            this.cartService.removeProductFromCart(product);
        }, 300);

    }

    getUpdatedGrantTotalCart(): void {
        this.grandTotalCart = this.cartService.getGrandTotalCard();
    }

    navigateToOrderConfirmation(): void {
        this.router.navigate(['/order-confirmation']);
    }
}
