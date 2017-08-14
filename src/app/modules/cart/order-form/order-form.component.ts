import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CartService } from "../../../common/services/cart.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
    userForm: FormGroup;
    constructor(private fb: FormBuilder, private router: Router,  private cartService: CartService) { }

    ngOnInit() {
        this.buildForm();
    }
    
    submitOrder():void {
        this.cartService.resetCart();
        this.router.navigate(['order-success', {
            firstName: this.userForm.get('firstName').value,
            lastName: this.userForm.get('lastName').value
        }])
    }
    
    private buildForm() {
        this.userForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: [
                { value: '', disabled: false }, [Validators.required, Validators.maxLength(50)]
            ],
            email: [    '',
                [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
            ]
        });
        
    }
}

