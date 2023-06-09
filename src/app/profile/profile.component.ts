import { Component, OnInit } from '@angular/core';

import { User } from '../store/auth/auth.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { FetchUserData } from '../store/profile/profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: User;
  loading: false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchUserData());
  }
}
