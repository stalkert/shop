import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
    firstName: string;
    lastName: string;
    constructor(private route: ActivatedRoute) { }
    
    ngOnInit() {
        this.route.data.subscribe((data: { orderSuccess: {firstName: string, lastName: string} }) => {
            if (data.orderSuccess) {
                this.firstName = data.orderSuccess.firstName;
                this.lastName = data.orderSuccess.lastName;
                
            }
        });
    }

}
