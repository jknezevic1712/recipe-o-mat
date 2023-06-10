import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import {
  Auth,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  updateEmail,
} from '@angular/fire/auth';

import { map, switchMap, tap } from 'rxjs/operators';

import {
  AUTH_ACTIONS,
  AuthFail,
  AuthSuccess,
  RefreshUserData,
  StartUserRefresh,
  LoginStart,
  EditUserData,
  FetchUserData,
} from './auth.actions';

import { User } from './auth.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Injectable()
export class AuthEffects {
  updatedUser: User;

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<AppState>,
    private auth: Auth
  ) {}

  loginWithGoogle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AUTH_ACTIONS.GOOGLE_SIGN_IN),
        tap(() => {
          const login = (provider: GoogleAuthProvider) => {
            signInWithPopup(this.auth, provider)
              .then((userData) => {
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
                    redirect: true,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
              });
          };

          return login(new GoogleAuthProvider());
        })
      ),
    {
      dispatch: false,
    }
  );

  loginWithCredentials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.LOGIN_START),
      switchMap(async (data: LoginStart) => {
        const { email, password } = data.payload;

        setPersistence(this.auth, browserSessionPersistence).then(() =>
          signInWithEmailAndPassword(this.auth, email, password)
        );
      }),
      map(
        () =>
          new AuthSuccess({
            userId: this.auth.currentUser.uid,
            email: this.auth.currentUser.email,
            fullName: this.auth.currentUser.displayName,
            photoURL: this.auth.currentUser.photoURL,
            redirect: true,
          })
      )
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.AUTO_LOGIN),
      map(() => {
        const userData: User = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
          return new AuthFail('');
        }

        return new AuthSuccess({
          userId: userData.id,
          email: userData.email,
          fullName: userData.fullName,
          photoURL: userData.photoURL,
          redirect: true,
        });
      })
    )
  );

  authRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AUTH_ACTIONS.AUTH_SUCCESS),
        tap((data: AuthSuccess) => {
          if (data.payload.redirect) {
            this.router.navigate(['/']);
          }
        })
      ),
    {
      dispatch: false,
    }
  );

  fetchUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.FETCH_USER_DATA),
      switchMap(async () => {
        new StartUserRefresh();

        return this.auth.currentUser.reload().then(() => {
          const { displayName, email, photoURL, uid } = this.auth.currentUser;

          this.updatedUser = {
            id: uid,
            fullName: displayName,
            email,
            photoURL,
          };
        });
      }),
      map(() => {
        return new RefreshUserData(this.updatedUser);
      })
    )
  );

  refreshUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.REFRESH_USER_DATA),
      map((userData: RefreshUserData) => {
        const { id: userId, email, fullName, photoURL } = userData.payload;

        return new AuthSuccess({
          userId,
          email,
          fullName,
          photoURL,
          redirect: false,
        });
      })
    )
  );

  editUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS.EDIT_USER_DATA),
      map((data: EditUserData) => {
        const { email, fullName, photoURL } = data.payload;

        updateProfile(this.auth.currentUser, {
          displayName: fullName,
          photoURL: photoURL,
        });
        updateEmail(this.auth.currentUser, email);

        this.router.navigate(['/']);

        return new FetchUserData();
      })
    )
  );

  logoutUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AUTH_ACTIONS.LOGOUT),
        tap(() => {
          this.auth.signOut();
        })
      ),
    {
      dispatch: false,
    }
  );
}
