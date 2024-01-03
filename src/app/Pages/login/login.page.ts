import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthenticationService) {}

  async login() {
    const isAuthenticated = await this.authService.authenticate(this.email, this.password);
    if (isAuthenticated) {
      this.router.navigate(['/tabs/tab1']);
    } else {
      console.log('Authentication failed.');
    }
  }

  togglePassword() {
    const passwordField = document.querySelector('.pswrd') as HTMLInputElement;
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }

  loginWith(provider: string) {
    console.log(`Logging in with ${provider}`);
  }
}
