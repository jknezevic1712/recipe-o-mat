import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  AUTH_ACTIONS,
  AuthFail,
  AuthSuccess,
} from '../store/auth/auth.actions';

import { User } from '../store/auth/auth.model';

// import { environment } from 'src/environments/environment';
// import { FirestoreDBService } from 'src/firestore/firestore.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    // private firestoreDbService: FirestoreDBService,
    private router: Router
  ) {}

  autoLogin = createEffect(() =>
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
          idToken: userData.idToken || '',
        });
      })
    )
  );

  authRedirect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AUTH_ACTIONS.AUTH_SUCCESS),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    {
      dispatch: false,
    }
  );

  // authSignup = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.SIGNUP_START),
  //     switchMap((signupAction: AuthActions.SignupStart) => {
  //       return this.http
  //         .post<AuthResponseData>(
  //           `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
  //           {
  //             email: signupAction.payload.email,
  //             password: signupAction.payload.password,
  //             returnSecureToken: true,
  //           }
  //         )
  //         .pipe(
  //           tap((resData) => {
  //             this.authService.setLogoutTimer(+resData.expiresIn * 1000);
  //           }),
  //           map((resData) =>
  //             handleAuthentication(
  //               resData.localId,
  //               resData.email,
  //               resData.idToken,
  //               +resData.expiresIn
  //             )
  //           ),
  //           catchError((errorRes) => handleError(errorRes))
  //         );
  //     })
  //   )
  // );

  // authLogin = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.LOGIN_START),
  //     switchMap((authData: AuthActions.LoginStart) => {
  //       return this.http
  //         .post<AuthResponseData>(
  //           'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
  //             environment.firebaseAPIKey,
  //           {
  //             email: authData.payload.email,
  //             password: authData.payload.password,
  //             returnSecureToken: true,
  //           }
  //         )
  //         .pipe(
  //           tap((resData) => {
  //             this.authService.setLogoutTimer(+resData.expiresIn * 1000);
  //           }),
  //           map((resData) =>
  //             handleAuthentication(
  //               resData.localId,
  //               resData.email,
  //               resData.idToken,
  //               +resData.expiresIn
  //             )
  //           ),
  //           catchError((errorRes) => handleError(errorRes))
  //         );
  //     })
  //   )
  // );

  // authRedirect = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AUTH_ACTIONS.AUTH_SUCCESS),
  //       tap((authSuccessAction: AuthSuccess) => {
  //         // if (authSuccessAction.payload.redirect) {
  //         this.router.navigate(['/']);
  //         // }
  //       })
  //     ),
  //   {
  //     dispatch: false,
  //   }
  // );

  // autoLogin = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.AUTO_LOGIN),
  //     map(() => {
  //       const userData: {
  //         id: string;
  //         email: string;
  //         _token: string;
  //         _tokenExpirationDate: string;
  //       } = JSON.parse(localStorage.getItem('userData'));

  //       if (!userData) {
  //         return;
  //       }

  //       const loadedUser = new User(
  //         userData.id,
  //         userData.email,
  //         userData._token,
  //         new Date(userData._tokenExpirationDate)
  //       );

  //       if (loadedUser.token) {
  //         const expirationDuration =
  //           new Date(userData._tokenExpirationDate).getTime() -
  //           new Date().getTime();
  //         this.authService.setLogoutTimer(expirationDuration);

  //         return new AuthActions.AuthenticateSuccess({
  //           userId: loadedUser.id,
  //           email: loadedUser.email,
  //           token: loadedUser.token,
  //           expirationDate: new Date(userData._tokenExpirationDate),
  //           redirect: false,
  //         });
  //       }

  //       return {
  //         type: 'DUMMY',
  //       };
  //     })
  //   )
  // );

  // authLogout = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.LOGOUT),
  //       tap(() => {
  //         this.authService.clearLogoutTimer();
  //         localStorage.removeItem('userData');
  //         this.router.navigate(['/auth']);
  //       })
  //     ),
  //   {
  //     dispatch: false,
  //   }
  // );
}
