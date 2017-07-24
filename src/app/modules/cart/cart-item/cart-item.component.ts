import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    HostListener,
    DoCheck} from '@angular/core';

import { Product } from 'app/models/products.model';


@Component({
    moduleId: module.id,
  selector: '[app-cart-item]',
  templateUrl: 'cart-item.component.html',
  styleUrls: ['cart-item.component.css']
})
export class CartItemComponent implements OnInit, DoCheck {
    @Input() product: Product;
    @Output() removeProductFromCart: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() grandTotalChanged: EventEmitter<String> = new EventEmitter<String>();

    @HostListener('mouseenter',['$event']) onMouseEnter(event) {
        event.target.style.backgroundColor = '#f8f8f8';
    }

    @HostListener('mouseleave',['$event']) onMouseLeave(event) {
        event.target.style.backgroundColor = '#ffffff';
    }
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
        this.product.shrink = true;
        this.removeProductFromCart.next(this.product);
    }
}
