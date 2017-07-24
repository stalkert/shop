import { Component, OnInit , EventEmitter} from '@angular/core';
import { User} from 'app/models/user';

@Component({
    moduleId: module.id,
  selector: 'app-register-input-fields',
  templateUrl: 'register-input-fields.component.html',
  styleUrls: ['register-input-fields.component.css'],
  outputs: ['userRegisterData']
})
export class RegisterInputFieldsComponent implements OnInit {
  user: User = new User('','');
  userRegisterData = new EventEmitter();
  loginAndPassword(){
    this.userRegisterData.emit(this.user);
    console.log('Login: ', this.user.login,' Password: ', this.user.password)
  }

  ngOnInit() {
  }

}
