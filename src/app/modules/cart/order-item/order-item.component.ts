import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/products.model';

@Component({
    moduleId: module.id,
    selector: '[app-order-item]',
    templateUrl: 'order-item.component.html',
    styleUrls: ['order-item.component.css']
})
export class OrderItemComponent implements OnInit {
    @Input() product: Product;
    itemPriceTotal: number;

    constructor() { }

    ngOnInit(): void {
        this.getItemPriceTotal();
    }

    getItemPriceTotal(): void {
        this.itemPriceTotal =  this.product.price * this.product.quantityInCart;
    }

}
