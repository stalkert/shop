import {Component, OnInit,  OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
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

  cartNonEmpty(): boolean {
    return !!this.getProductsCount();
  }

  getProductsCount(): number {
    console.log('getProductsCount');
    return this.cartService.getCountProductsInCart();

  }

}
