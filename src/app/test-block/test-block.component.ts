/*
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'app-test-block',
  template: `<child-comp [(userName)]="name"  ></child-comp>
                <div>Выбранное имя1: {{name}}</div>
                <example-app></example-app>`

})
export class TestBlockComponent{
  name: string = "Tom";

}
@Component({
  selector: 'child-comp',
  template: `<input  name="userName" [(ngModel)]="userName" (ngModelChange)="onNameChange($event)" />
                <div>Выбранное имя2: {{userName}}</div>`
})
export class ChildComponent{

  @Input() userName:string;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string){

    this.userNameChange.emit(model);
  }
}
@Component({
  selector: 'example-app',
  template: `
      <input   [(ngModel)]="firstValue" #first="ngModel" required >
      <button (click)="setmodel()">Submit</button>
    <p>First name value: {{first.model}} - {{firstValue}} - {{first.value}}</p>`
})
export class SimpleFormComp {
  firstValue: string;
  setmodel(){
    this.firstValue = "111";
  }
  /!*    onSubmit(first: NgModel) {
   console.log(first);  // { first: '', last: '' }
   //console.log(f.valid);  // false
   }*!/
}
*/
