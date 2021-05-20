import { AlbumsService } from './../../services/albums.services';
import Swal from 'sweetalert2';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent implements OnInit {
    carrito: any = {};
    db = 'https://blackhole-music-default-rtdb.firebaseio.com/formularios';
    forma: FormGroup;
    validaciones = [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(20)];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private firebase: FirebaseService,
    private albumsService: AlbumsService
  ) {

    this.crearFormulario();
    this.carrito = this.albumsService.getAlbums();
    this.carrito.cantidad = '0';

   }

  ngOnInit(): void {
  }

  get nombreNoValido(): boolean{
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get apellidoNoValido(): boolean{
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }
  get usuarioNoValido(): boolean{
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }
  get paisNoValido(): boolean{
    return this.forma.get('pais').invalid && this.forma.get('pais').touched;
  }
  get ciudadNoValida(): boolean{
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched;
  }
  get checkNoValido(): boolean{
    return this.forma.get('check').invalid && this.forma.get('check').touched;
  }

  crearFormulario(): void{
    this.forma = this.fb.group({
      nombre: ['', this.validaciones],
      apellido: ['', this.validaciones],
      usuario: ['', [Validators.required, Validators.maxLength(10)]],
      preferencia: [''],
      pais: ['', this.validaciones],
      ciudad: ['', this.validaciones],
      check: ['']
    });
  }


  guardar(): void {
    console.log(this.forma);
    if ( this.forma.invalid){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }else{
      this.firebase.putForm(this.forma.value);
      Swal.fire({
        icon: 'success',
        title: 'Send',
        showConfirmButton: false,
        timer: 1500
      });
      for (let i = 0; i < this.carrito.length; i ++){
        const productos = ('https://blackhole-music-default-rtdb.firebaseio.com/' + i + '.json');
        const cant = this.carrito[i];
        cant.cantidad = 0;
        console.log(productos);
        this.http.patch(productos, cant).subscribe(
          val => {
              console.log('Se ha cambiado la cantidad correctamente.',
                          val);
          },
          response => {
              console.log('PATCH call in error, response');
          },
          () => {
              console.log('El observable PATCH fue completado.');
          }
      );
      }
      setTimeout( () => {
        this.forma.reset();
      }, 1000);
  }}
}
