import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  constructor( private http: Http) { }
  	getProducts(): Observable<any>{
  		return this.http.get('assets/data/products.json');
  }

}
