import { environment as env} from './../environments/environment';
// import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { MusicComponent } from './components/music/music.component';
import { CarComponent } from './components/car/car.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from '@angular/common/http';
import 'sweetalert2/src/sweetalert2.scss';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Routes
import { APP_ROUTING} from './app.routes';
import { RouterModule } from '@angular/router';
// Services
import { AlbumsService } from './services/albums.services';
import { FirebaseService } from './services/firebase/firebase.service';
import { LoginComponent } from './components/login/login.component';
import { AuthModule} from '@auth0/auth0-angular';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StockCarComponent } from './components/stock-car/stock-car.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { FormsComponent } from './components/forms/forms.component';

@Injectable({
  providedIn: 'root'
})

// Components

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AlbumsComponent,
    MusicComponent,
    SearcherComponent,
    CarComponent,
    LoginComponent,
    UserProfileComponent,
    StockCarComponent,
    CarouselComponent,
    AuthButtonComponent,
    FormsComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    [IvyCarouselModule],
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCmF9DB4fcIJtAdmkVsTIA_2JnlY9k1ahk",
        authDomain: "blackhole-music.firebaseapp.com",
        projectId: "blackhole-music",
        databaseURL: "https://blackhole-music-default-rtdb.firebaseio.com",
        storageBucket: "blackhole-music.appspot.com",
        messagingSenderId: "58741108894",
        appId: "1:58741108894:web:e64df1f742f058b3b18b8f",
        measurementId: "G-602WFDZVNW"
      }
    ),
    APP_ROUTING,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth
    }),
    NgbModule,

  ],
  providers: [
    AlbumsService,
    FirebaseService,
    CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
