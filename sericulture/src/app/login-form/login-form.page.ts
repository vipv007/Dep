import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss']
})
export class LoginFormPage {
  userData = {
    name: '',
    phoneNumber: ''
  };

  constructor(private loginService: LoginService) { }

  onSubmit() {
    this.loginService.loginUser(this.userData)
      .subscribe(
        response => {
          console.log(response); // Handle success response
        },
        error => {
          console.error(error); // Handle error
        }
      );
  }
}
