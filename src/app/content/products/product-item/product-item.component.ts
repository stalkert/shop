import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'app/models/products.model';
import { CartService} from 'app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product: Product) {
    this.cartService.addProductToCart(product);
    console.log(product);
  }
}
