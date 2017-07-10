import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: 'product-review.component.html',
  styleUrls: ['product-review.component.css']
})
export class ProductReviewComponent implements DoCheck {
	@Input() star: number;
	greenStarCount: Array<number>;
	grayStarCount: Array<number>;
  constructor() {
  	// let greenStarCountInt = Math.round(this.star);
  	//this.greenStarCount = new Array(greenStarCountInt);

   }

  ngDoCheck() {
	  const greenStarCountInt = Math.round(this.star);
	  const grayStarCountInt = 5 - greenStarCountInt;
	  this.greenStarCount = this.getStarsArray(greenStarCountInt);
	  this.grayStarCount = this.getStarsArray(grayStarCountInt);

  }
  getStarsArray(star){
  	let counter = 1;
  	const arr = [];
  	while(arr.length < star) {
  		arr.push(counter);
  		counter++;
  	}
  	return arr;
  }

}
