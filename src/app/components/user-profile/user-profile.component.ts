import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  message: string = "Prueba 01"

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
