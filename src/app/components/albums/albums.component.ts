import { Router} from '@angular/router';
import { AlbumsService } from './../../services/albums.services';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  @Input() album: any = {};
  @Input() index: number;

  albums: any = [];

  constructor(
    private ALBUMSERVICE: AlbumsService,
    private router: Router ,
    private http: HttpClient
    ){ }

  ngOnInit(): void {

    this.http.get('https://blackhole-music-default-rtdb.firebaseio.com/.json')
    .subscribe(data => {
      this.albums = data;
    });
//    this.albums = this.ALBUMSERVICE.getAlbums();
   }
  verAlbum( idx: number): void{
    this.router.navigate(['/album', idx ] );
}


}
