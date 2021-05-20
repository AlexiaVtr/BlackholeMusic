import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './../home/home.component';
import { AuthService } from '@auth0/auth0-angular';
import { AuthGuard } from './../../services/auth.guard';
import { Router, CanActivate } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-stock-car',
  templateUrl: './stock-car.component.html'
})
export class StockCarComponent implements OnInit {

  @Input() album: any = {};
  @Input() index: number;
  constructor(
    private router: Router,
    public authG: AuthGuard,
    public auth: AuthService,
    private home: HomeComponent,
    private cookieService: CookieService,
    ) { }

  ngOnInit(): void {
  }

  verAlbum(): void{
//    console.log(this.index);
    if (this.authG.canActivate() === true) {
      this.router.navigate(['/album', this.index ] );
    }else {
      Swal.fire({
        title: "<strong>You're not loggued-in</strong>",
        icon: 'info',
        html:
          'If you want to listen the demo <b>log in</b> ' +
          // Referencia dejada en vacio para redireccionar a home:
          '<a href=""><u>here</u></a>. ',
        showCloseButton: false,
      });
    }
  }

}
