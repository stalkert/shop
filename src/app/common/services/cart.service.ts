import { Injectable } from '@angular/core';
import { Product } from 'app/models/products.model';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
    cart: Array<Product> = [];
    
    private cart$: Subject<Product[]> = new Subject<Product[]>();
    
    public cartStream$ = this.cart$.asObservable();
    
    
    addProductToCart(product: Product) {
        const index = this.cart.indexOf(product);
        if (index !== -1) {
            this.cart[index].quantityInCart++;
        } else {
            product.quantityInCart++;
            this.cart.push(product);
        }
        this.cart$.next();
    }
    
    removeProductFromCart(deletedProduct: Product): void {
        this.cart.splice(this.cart.findIndex((product) => product === deletedProduct), 1);
        this.cart$.next();
    }
    
    getProductsInCart() {
        return this.cart || [];
    }
    
    getCountProductsInCart(): number {
        return this.getProductsInCart().length;
    }
    
    getGrandTotalCard(): number {
        return this.cart.reduce((sum, current) => sum + current.price * current.quantityInCart, 0);
    }
}
