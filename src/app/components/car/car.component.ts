import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AlbumsService } from './../../services/albums.services';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})


export class CarComponent {
  carrito: any = {};
  cant: any = {};
  carrito2: string[] = [];
  carrito3: number[] = [];
  total: any = {};
  private productos = 'https://blackhole-music-default-rtdb.firebaseio.com/'

  constructor(
    private cookieService: CookieService,
    private ALBUMSERVICE: AlbumsService,
    private activatedRoute: ActivatedRoute,
    private router: Router ,
    private http: HttpClient,
  ) {
    var subtotal:number = 0;
    this.carrito = this.ALBUMSERVICE.getAlbums();

    for (var i = 0; i<this.carrito.length; i ++){
// ESTO EN VERDE ES PARA ELIMINAR DEL CARRO SI LA CANTIDAD ES CERO:
// Además es para utilizar los cookies para traer la compra.
//      if(this.carrito[i].cantidad == 0){
//        this.cookieService.delete(this.carrito.serie)}else{
//      const cookieExist:boolean = this.cookieService.check(i.toString())
//      if (cookieExist == true){
      if (this.carrito[i].cantidad > 0){
        this.carrito2.push(this.carrito[i]);
        this.carrito3.push(this.carrito[i].precio * this.carrito[i].cantidad);
         subtotal += this.carrito[i].precio * this.carrito[i].cantidad;
         this.total = subtotal;
        console.log(subtotal);
      }}
    }
//  }



    ngOnInit(): void {
   }

   remove(id:string){
//    this.cookieService.delete(id);
    this.productos = ('https://blackhole-music-default-rtdb.firebaseio.com/' + id + '.json');
    this.cant = this.carrito[id];
    this.cant.cantidad -= 1;
    console.log(this.productos)
    this.http.patch(this.productos, this.cant).subscribe(
      val => {
          console.log("Se ha cambiado la cantidad correctamente.",
                      val);
      },
      response => {
          console.log("PATCH call in error", response);
      },
      () => {
          console.log("El observable PATCH fue completado.");
      }
  );
   }

   existe(){
     if (this.carrito2.length == 0)
     { return false}else{ return true}
   }

}

