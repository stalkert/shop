import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductsService {

    constructor( private db: AngularFireDatabase) {

    }

    getProducts(): FirebaseListObservable<any> {
        return  this.db.list('/products');
    }

}
