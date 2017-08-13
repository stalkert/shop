import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { Product } from 'app/models/products.model';
import { CartService } from '../services/cart.service';

@Injectable()
export class OrderResolveGuard implements Resolve<Product[]> {

    constructor(
        private cartService: CartService,
        private router: Router
    ) {}

    resolve(): Product[]| null {
            if (this.cartService.getCountProductsInCart()) {
                return this.cartService.getProductsInCart();
            } else {
                this.router.navigate(['cart']);
                return null;
            }
    }
}

