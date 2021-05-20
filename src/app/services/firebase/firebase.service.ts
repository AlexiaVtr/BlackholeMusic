import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})



export class FirebaseService {

  isLoggedIn = false;

  constructor(
    private firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase,
    ) { }


//  async signin(email: string, password: string){
//    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
//    .then(res =>{
//      this.isLoggedIn = true
//      localStorage.setItem('user',JSON.stringify(res.user))
//    })
//  }
//  async signup(email: string, password: string){
//    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
//    .then(res =>{
//      this.isLoggedIn = true
//      localStorage.setItem('user',JSON.stringify(res.user))
//    })
//  }
//  logout(){
//    this.firebaseAuth.signOut()
//    localStorage.removeItem('user')
//  }


//  getBuy(){
//    this.firestore.collection('cd').snapshotChanges();
//  }

  putForm(form: any): void {
    this.firestore.collection('formulario').add(form).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  }


//  delete(id){
//    this.firestore.collection('cd').doc(id).delete;
//
//  }


}
