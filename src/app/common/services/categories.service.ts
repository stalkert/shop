import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Category } from 'app/models/categories.model';

@Injectable()
export class CategoriesService {
    
    constructor( private db: AngularFireDatabase ) {
    }
    
    getCategories(): FirebaseListObservable<any>{
    return this.db.list('/categories');
    }
    
    getCategory(id: number): FirebaseListObservable<any> {
      return this.db.list('/categories/'+ id);
    }
    
    updateCategory(category: Category) {
        this.db.object('/categories/'+ category.id).update(category);
/*            .subscribe((categories) => {
            categories.splice.(categories.findIndex((categoryObj) => categoryObj.id === category.id), 1, category)
        })*/
    }
    
    addCategory(category: Category) {
        this.db.object('/categories/'+ category.id).set(category);
    }
}
