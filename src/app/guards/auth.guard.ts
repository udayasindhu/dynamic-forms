import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): boolean {
    if (sessionStorage.getItem('isLoggedIn') && this.isSessionExpired()) {
      return true;
    } else {
      this.loginService.setAuthError('Please login to continue');
      sessionStorage.removeItem('loggedinTime');
      sessionStorage.removeItem('expiryTime');
      sessionStorage.removeItem('isLoggedIn');
      this.router.navigate(['login']);
      return false;
    }
  }

  isSessionExpired() {
    let currentTime = Date.now();
    if (Number(sessionStorage.getItem('expiryTime')) >= currentTime) {
      return true;
    } else {
      return false;
    }
  }
}
