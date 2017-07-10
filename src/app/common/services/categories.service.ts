import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Rx';
@Injectable()
export class CategoriesService {
  constructor( private http: Http ) {

  }
  getCategories(): Observable<any>{
    return this.http.get('assets/data/categories.json');
  }
}
