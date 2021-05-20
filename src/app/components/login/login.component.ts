import { FirebaseService } from './../../services/firebase/firebase.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Output() isLogout = new EventEmitter< void >();
  constructor(
    public firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
  }
//  logout(){
//    this.firebaseService.logout()
//    this.isLogout.emit()
//  }
}
