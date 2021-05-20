import { AuthGuard } from './../../services/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { CarouselComponent } from './../carousel/carousel.component';
import { AuthService } from '@auth0/auth0-angular';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



@Injectable({
  providedIn: 'root'
})



export class HomeComponent implements OnInit {


  messages: AngularFireList<any>;

  user = Math.random().toString(36).substring(2, 10);
  isSignedIn = false;
  constructor(
    public firebaseService: FirebaseService,
    public auth: AuthService,
    private http: HttpClient,
    private db: AngularFireDatabase,
    private carouselComponent: CarouselComponent,
    private cookieService: CookieService,
    public authGuard: AuthGuard,
  ){

       this.http.get('https://blackhole-music-default-rtdb.firebaseio.com/.json')
        .subscribe(data => {
        console.log(data);
        const session = typeof(Storage);
        console.log(session);
        } );

  }

  ngOnInit(): void{}

    loginWithRedirect(): void {
      this.auth.loginWithRedirect();
      this.cookieService.set('Username', this.user);
    }

    logout(): void{
      this.cookieService.delete('Username');
    }


}

