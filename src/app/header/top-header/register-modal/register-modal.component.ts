import { Component, Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User}  from 'app/models/user';
import { LoginService } from 'app/services/login.service';
import { IsAuthorizedService }  from 'app/services/is-authorized.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  @ViewChild('modalRegister')
  modalObjRegister: ModalComponent;
  user:User;
  @Output() emailAuthorizedUser: EventEmitter<string> = new EventEmitter<string>();

  constructor( private loginService: LoginService, private isAuth: IsAuthorizedService) {
  }

  createUser() {
    this.loginService.createUser(this.user.login, this.user.password)
      .then(
        success => {
          if (success) {
            console.log('Успешная регистрация ', success);
            this.modalObjRegister.close();
            this.loginService.login(this.user.login, this.user.password)
                .then(
                    auth => {
                      if (auth) {
                        this.isAuth.userLogined();
                        this.isAuth.setUserEmail(auth.email);
                        this.emailAuthorizedUser.emit(auth.email);
                      } else {
                        this.isAuth.userNotLogined();
                      }
                    }
                )
                .catch(error => {
                  console.log(error);
                  this.user.login = '';
                  this.user.password = '';
                });
          }
        });
  }
  getNewUserData(user):void{
    this.user = user;
    console.log('Login: ', user.login,' Password: ', user.password);
  }
  ngOnInit() {
  }

}
