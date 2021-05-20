
import { AuthGuard } from './../../../services/auth.guard';
import { AuthService } from '@auth0/auth0-angular';
import { Router, RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    public authGuard: AuthGuard,
    ){

    }

  ngOnInit(): void {
  }

  findAlbum( termino:String){
    this.router.navigate( ['/search', termino] );

  }

}
