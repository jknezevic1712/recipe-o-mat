import { Injectable, OnDestroy, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  user,
  signInWithPopup,
} from '@angular/fire/auth';

import { map, switchMap, take, tap } from 'rxjs/operators';

import {
  AUTH_ACTIONS,
  AuthFail,
  AuthSuccess,
  RefreshUserData,
  StartUserRefresh,
  LoginStart,
} from './auth.actions';

import { User } from './auth.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { from } from 'rxjs';

@Injectable()
export class AuthEffects {
  // firestoreDb: Firestore = inject(Firestore);
  // private auth: Auth = inject(Auth);
  updatedUser: User;

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<AppState>,
    private firestoreDb: Firestore,
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

            // return this.auth
            //   .signInWithPopup(provider)
            //   .then((userData) => {
            //     const {
            //       email,
            //       photoURL,
            //       uid: userId,
            //       displayName: fullName,
            //     } = userData.user;

            //     this.store.dispatch(
            //       new AuthSuccess({
            //         userId,
            //         email,
            //         fullName,
            //         photoURL,
            //         redirect: true,
            //       })
            //     );
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
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

  // editUserData$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(PROFILE_ACTIONS.EDIT),
  //       switchMap((user) => {
  //         console.log('CURRENT USER ', this.currentUser);
  //         // let user = this.currentUser;
  //         // const userSub = this.store.select('auth', 'user').pipe(take(1), map((user) => user)).subscribe((user) => user = user);

  //         return updateCurrentUser(this.auth, this.currentUser);
  //       }),
  //       map(() => )
  //     )
  // );
}
