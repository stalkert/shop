import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CategoriesService {
  constructor( private db: AngularFireDatabase ) {

  }
  getCategories(): FirebaseListObservable<any>{
    return this.db.list('/categories');
  }
}
