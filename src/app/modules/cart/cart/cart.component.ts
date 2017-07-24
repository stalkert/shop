import {Component, OnInit,  OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from 'app/common/services/cart.service';

@Component({
    moduleId: module.id,
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  productsCount: number;
  sub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.cartStream$.subscribe(() => {
      this.productsCount = this.getProductsCount();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getProductsCount(): number {
    return this.cartService.getCountProductsInCart();
  }

}
