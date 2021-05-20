import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '@auth0/auth0-angular';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

    constructor(
      public auth: AuthService,
      private cookieService: CookieService,
    ){}

    canActivate(): boolean {
      const login = this.cookieService.check('Username');
      return login;
    }
}
