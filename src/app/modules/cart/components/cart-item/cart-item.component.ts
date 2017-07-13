import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';

import { Product } from 'app/models/products.model';


@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, DoCheck {
    @Input() product: Product;
    @Output() removeProductFromCart: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() grandTotalChanged: EventEmitter<String> = new EventEmitter<String>();
    itemPriceTotal: number;
    
    constructor() { }

    ngOnInit() {
      this.getItemPriceTotal();
    }
  
    ngDoCheck(){
      this.grandTotalChanged.next('grandTotalChanged');
    }
    
    incrementQuantity() {
        this.product.quantityInCart++;
        this.getItemPriceTotal();
    }
    
    decrementQuantity() : void {
        if (this.product.quantityInCart === 1) {
            return;
        }
        this.product.quantityInCart--;
        this.getItemPriceTotal();
    }
    
    getItemPriceTotal(): void {
        this.itemPriceTotal =  this.product.price * this.product.quantityInCart;
    }
    
    removeItem() {
        this.removeProductFromCart.next(this.product);
    }
}
