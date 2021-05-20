import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

// gs://blackhole-music.appspot.com/b1.png

  images: any = [];
//  images.http.push()`gs://blackhole-music.appspot.com/${n}.png`);
//    images = [];


  constructor(
    public auth: AuthService,
    public firebaseService: FirebaseService,
    private http: HttpClient,
    ) {

//      this.http.get('gs://blackhole-music.appspot.com/')
//      .subscribe(data =>{
//        this.images.push(data);
//      })
     }

  ngOnInit(): void {
  }

}
