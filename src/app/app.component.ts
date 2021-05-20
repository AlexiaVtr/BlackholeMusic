import { FirebaseService } from './services/firebase/firebase.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackhole-music';

  constructor(
    private fireBaseService: FirebaseService,
    private auth: AuthService
  ){}
}
