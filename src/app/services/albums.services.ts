import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AlbumsService {
  private albums: any = [];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {

    this.http.get('https://blackhole-music-default-rtdb.firebaseio.com/.json')
    .subscribe(data =>{
      this.albums = data;
    })

  }




  getAlbums(): any{
    return this.albums;
  }

  getMusic( idx: string){
    return this.albums[idx];
  }

  findAlbums( termino:String){
    let albumsArr:String[] = [];
    termino = termino.toLowerCase();
    for( let album of this.albums){
      let nombre = album.nombre.toLowerCase();
      let genero = album.genero.toLowerCase();
      let cancion = album.album.toLowerCase();
      let vocal = album.vocal.toLowerCase();
      if (nombre.indexOf(termino) >= 0
      || (genero.indexOf(termino) >= 0
      || cancion.indexOf(termino) >= 0
      || vocal.indexOf(termino) >= 0)) {
        albumsArr.push( album );
      }
  }
  return albumsArr;
}
}
