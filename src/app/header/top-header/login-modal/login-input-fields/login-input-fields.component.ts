import { Component, OnInit , EventEmitter} from '@angular/core';
import { User} from 'app/models/user';

@Component({
  selector: 'app-login-input-fields',
  templateUrl: './login-input-fields.component.html',
  styleUrls: ['./login-input-fields.component.css'],
  outputs: ['userData']
})
export class LoginInputFieldsComponent implements OnInit {
  user: User = new User('','');
  userData = new EventEmitter();
  constructor() {
    //this.userData = new EventEmitter();
  }
  showLoginAndPassword(){
    this.userData.emit(this.user);
    //console.log('Login: ', this.user.login,' Password: ', this.user.password)
  }
  ngOnInit() {
  }

}

