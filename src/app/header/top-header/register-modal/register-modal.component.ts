import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User}  from 'app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
  outputs:['emailAutorisatedUser']
})
export class RegisterModalComponent implements OnInit {
  @ViewChild('modalRegister')
  modalObjRegister: ModalComponent;
  user:User;
  emailAutorisatedUser = new EventEmitter();
  constructor( public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
        if(auth) {
          this.emailAutorisatedUser.emit(auth.email);
        }
      }
      );
  }
  createUser() {

/*    this.afAuth.auth.createUser({ email: this.user.login, password: this.user.password })
      .then(
        success => {
          console.log('Успешная регистрация ',success);
          if (success) {
            this.modalObjRegister.close();
            alert('Вы успешно зарегестрировались!');
            this.af.auth.login({ email: this.user.login, password: this.user.password })
              .then(auth => this.emailAutorisatedUser.emit(auth.auth.email));
          }
        },
        error => alert(error)
      );*/
  }
  getNewUserData(user):void{
    this.user = user;
    console.log('Login: ', user.login,' Password: ', user.password);
  }
  ngOnInit() {
  }

}
