import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User}  from 'app/models/user';
import { IsAuthorizedService }  from 'app/common/services/is-authorized.service';
import {LoginService} from "app/common/services/login.service";

@Component({
  selector: 'app-login-modal',
  templateUrl: 'login-modal.component.html',
  styleUrls: ['login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('modalLogin')
  modalObjLogin: ModalComponent;
  @ViewChild('modalLogout')
  modalObjLogout: ModalComponent;
  user: User = new User('','');
  @Output() emailAuthorizedUser: EventEmitter<string> = new EventEmitter<string>();

  constructor( private loginService: LoginService, private isAuth: IsAuthorizedService) { }
  isAuthorizedCheck(){
    return this.isAuth.isUserAuthorized();
  }
  login() {
    this.modalObjLogin.close();
    this.loginService.login(this.user.login, this.user.password)
        .then(
            auth => {
              console.log(auth);
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
          this.user.login ='';
          this.user.password = '';
        });
  }
  logout(): void {
    this.modalObjLogout.close();
    this.loginService.signout();
    this.isAuth.userNotLogined();
    this.user.login ='';
    this.user.password = '';
  }
  showUser(user):void{
    this.user = user;
    console.log('Login: ', user.login,' Password: ', user.password);
  }
  ngOnInit() {
  }

}
