import { HttpClient } from '@angular/common/http';
import { AlbumsService } from './../../services/albums.services';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, CanActivate } from '@angular/router';
import Swal from 'sweetalert2'
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html'
})

export class MusicComponent{
  private productos= 'https://blackhole-music-default-rtdb.firebaseio.com/';

  music: any ={};
  car: any= {};
  cant: any= {};
//  cantConstante: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ALBUMSERVICE: AlbumsService,
    private cookieSvc: CookieService,
    private http:HttpClient
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.music = this.ALBUMSERVICE.getMusic( params['id']);
      this.productos += params['id']
      this.productos += '.json'
    });
  }


  ngOnInit(): void {
  }

  getStock(){
     this.cookieSvc.set(this.music.serie,this.music.serie,0.03);
  }
  getCart(){
    if (this.car.length>0){
    return this.car}else{
    }
  }

  showOptions(){
    Swal.fire({
      title: 'Added product',
      text:'Check your cart :) !',
      icon: 'success',
      confirmButtonText: 'Return'
    });
    this.cant = this.music;
    this.cant.cantidad += 1;
    this.http.patch(this.productos, this.cant).subscribe(
      val => {
          console.log("PATCH call successful value returned in body",
                      val);
      },
      response => {
          console.log("PATCH call in error", response);
      },
      () => {
          console.log("The PATCH observable is now completed.");
      }
  );
}

}
