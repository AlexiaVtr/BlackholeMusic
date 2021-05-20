import { CookieService } from 'ngx-cookie-service';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {

    auth0 = new Auth0Client({
    domain: 'dev-x16yrk-w.us.auth0.com',
    client_id: 'Qp4YxC5hfMzJu9tqBeBpvTxDfVFPwKEh'
  });
  user = this.auth0.getUser();
  auth0Client: any = {};

  constructor(
    public auth: AuthService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
  }

  datos(): void{
  this.cookieService.delete('Username');
  }
//  loginWithRedirect(): void {
//    this.auth.loginWithRedirect();
//  }


}
