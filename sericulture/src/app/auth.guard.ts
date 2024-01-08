import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.authService.isLoggedInUser().getValue();
    if (isLoggedIn) {
      return true;
    }

    this.router.navigate(['/login']); // Redirect to the login page if not logged in.
    return false;
  }
}
