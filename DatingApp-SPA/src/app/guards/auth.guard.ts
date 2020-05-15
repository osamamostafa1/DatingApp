import { AlertifyService } from './../services/alertify.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService , private rouetr:Router , private alertify:AlertifyService){}
  canActivate(): boolean {
    if (this.auth.loggedIn()){
      return true;
    }

    this.alertify.error('You shall not pass!!!');
    this.rouetr.navigate(['/home']);
    return false;
  }
  
}
