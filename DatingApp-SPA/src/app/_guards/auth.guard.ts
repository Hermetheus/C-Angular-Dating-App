import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authServce: AuthService,
    private router: Router,
    private aleritfy: AlertifyService
  ) {}

  canActivate(): boolean {
    if (this.authServce.loggedIn()) {
      return true;
    }

    this.aleritfy.error('You shall not pass!!!');

    this.router.navigate(['/home']);
    return false;
  }
}
