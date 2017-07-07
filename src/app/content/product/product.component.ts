import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'app/models/products.model';
import {ProductsService} from 'app/services/products.service';
import {Response} from '@angular/http';
import {Subscription} from 'rxjs/Subscription';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    id: number;
    prod: Product;
    productImg: string;
    raiting: number;
    name: string;
    description: string;
    basePrice: number;
    price: number;

    private routeSubscription: Subscription;
    private productSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private productsService: ProductsService) {
        /*    this.routeSubscription = this.route.params.subscribe(params=>this.id=+params['id']);
         this.productSubscription = this.productsService.getProducts().subscribe((resp: Response) => {
         this.prod = resp.json().filter(prod => prod.id === this.id)[0];
         this.productImg = this.prod.mainImg;
         debugger;
         this.raiting = this.prod.raiting;
         console.log(this.prod);
         console.log(resp.json());
         });*/

    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => this.id = +params['id']);
        this.productSubscription = this.productsService.getProducts().subscribe((resp: Response) => {
            this.prod = resp.json().filter(prod => prod.id === this.id)[0];
            console.log(this.prod);
            this.productImg = this.prod.mainImg;
            this.raiting = this.prod.raiting;
            this.name = this.prod.name;
            this.description = this.prod.description;
            this.basePrice = this.prod.basePrice;
            this.price = this.prod.price;

            /*
             this.routeSubscription.unsubscribe();
             this.productSubscription.unsubscribe();
             */

        });
    }
}
