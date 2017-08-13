import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/common/services/cart.service';
import { Router } from '@angular/router';
import { Product } from 'app/models/products.model';

@Component({
    moduleId: module.id,
    selector: 'app-order-confirmation',
    templateUrl: 'order-confirmation.component.html',
    styleUrls: ['order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
    products: Product[];
    grandTotalCart: number;
    constructor(
        private cartService: CartService,
        private router: Router) { }

    ngOnInit(): void {
        this.products = this.cartService.getProductsInCart();
        this.grandTotalCart = this.cartService.getGrandTotalCard();
    }

}
