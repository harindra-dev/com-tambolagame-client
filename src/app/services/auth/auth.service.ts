import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import the authentication module
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private _Router: Router) {}
  async googleLogin(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    if (credential.user !== null && credential.user !== undefined) {
      this._Router.navigate(['/']);
    }
    console.log(credential);
  }
  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
