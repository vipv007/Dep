import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Initialize the authentication state, e.g., from a stored token.
  }

  async authenticate(email: string, password: string): Promise<boolean> {
    // Replace this with your actual authentication logic.
    // For example, you might make an API request to a server to validate the user's credentials.
    // If the authentication is successful, set isLoggedIn to true; otherwise, keep it as false.
    const isAuthenticated = email === 'user@example.com' && password === 'celestiya';
    this.isLoggedInSubject.next(isAuthenticated);
    return isAuthenticated;
  }

  logout(): void {
    // Log the user out by resetting the isLoggedIn state to false.
    this.isLoggedInSubject.next(false);
  }

  isLoggedInUser(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }
}
