import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'url';
import { resolveReflectiveProviders } from '@angular/core/src/di/reflective_provider';
import 'rxjs/add/operator/map';


@Injectable({

  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
  registerUser(email: string, pass:string){
    //devuelve promesa si o no
    /*return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolveReflectiveProviders(userData),
      err => reject(err)); 
    });*/
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    });

  }
  loginEmail(email: string, pass:string){
    //devuelve promesa si o no
    /*return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolveReflectiveProviders(userData),
      err => reject(err)); 
    });*/
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })

  }
  logout(){
    return this.afAuth.auth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }


}
