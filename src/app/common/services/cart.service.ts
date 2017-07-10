import { Injectable } from '@angular/core';
import { Product } from 'app/models/products.model';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  cart: Array<Product> = [];

  private cart$: Subject<Product[]> = new Subject<Product[]>();

  public cartStream$ = this.cart$.asObservable();


  addProductToCart(product: Product) {
    this.cart.push(product);
    this.cart$.next();
  }

  removeProductFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getProductsInCart() {
    return this.cart || [];
  }

  getCountProductsInCart() {
    return this.getProductsInCart().length;
  }
}
