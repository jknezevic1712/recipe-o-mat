import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducer';
import { AuthSuccess, Logout } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service,
    private store: Store<AppState>
  ) {}
  // Sign in with Google
  googleAuth() {
    return this.login(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  async login(provider: GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((userData) => {
        console.log('You have been successfully logged in!', userData);

        const {
          email,
          photoURL,
          uid: userId,
          displayName: fullName,
        } = userData.user;

        this.store.dispatch(
          new AuthSuccess({
            userId,
            email,
            fullName,
            photoURL,
            idToken: userData.credential['idToken'] || '',
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
