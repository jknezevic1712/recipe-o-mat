import { Injectable, OnDestroy, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  Firestore,
  collectionData,
  collection,
  updateDoc,
  doc,
  setDoc,
  DocumentReference,
  deleteDoc,
} from '@angular/fire/firestore';
import {
  updateProfile,
  updateEmail,
  updatePhoneNumber,
  reload,
  UserCredential,
  UserInfo,
  getAdditionalUserInfo,
  Auth,
  updateCurrentUser,
  user,
} from '@angular/fire/auth';

import { Observable, map, switchMap, take, takeUntil, tap } from 'rxjs';

import {
  FetchUserData,
  PROFILE_ACTIONS,
  RefreshUserData,
} from './profile.actions';
import { User } from '../auth/auth.model';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { AuthSuccess, RefreshUser } from '../auth/auth.actions';

@Injectable()
export class ProfileEffects implements OnDestroy {
  firestoreDb: Firestore = inject(Firestore);
  private auth: Auth = inject(Auth);

  currentUser: UserCredential['user'];
  private userSub$ = user(this.auth)
    .pipe(
      take(1),
      map((user) => user)
    )
    .subscribe((user) => (this.currentUser = user));

  constructor(private actions$: Actions, private store: Store<AppState>) {}

  fetchUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PROFILE_ACTIONS.FETCH),
      map(() => {
        this.store.dispatch(new RefreshUser());

        let updatedUser: User;

        this.currentUser
          .reload()
          .then(() => {
            const { displayName, email, photoURL, uid } = this.currentUser;

            updatedUser = {
              fullName: displayName,
              email,
              photoURL,
              id: uid,
              idToken: '',
            };
          })
          .then(() => {
            this.currentUser.getIdToken(true).then((newIdToken) => {
              updatedUser = { ...updatedUser, idToken: newIdToken };
            });
          });

        return new RefreshUserData(updatedUser);
      })
    )
  );

  refreshUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PROFILE_ACTIONS.REFRESH),
      map((userData: User) => {
        return new AuthSuccess({
          userId: userData.id,
          email: userData.email,
          fullName: userData.fullName,
          photoURL: userData.photoURL,
          idToken: userData.idToken,
          redirect: false,
        });
      })
    )
  );

  // editProfileData$ = createEffect(
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

  ngOnDestroy(): void {
    if (this.userSub$) {
      this.userSub$.unsubscribe();
    }
  }
}
