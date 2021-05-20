import { AlbumsService } from './../../services/albums.services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  albums:any[] = []
  termino:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino= (params['termino']);
      this.albums = this.albumService.findAlbums( params['termino'] );
      console.log(this.albums)
    })
  }

}


