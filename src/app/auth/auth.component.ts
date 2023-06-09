import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { GoogleSignIn } from '../store/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isSignUpMode = false;
  signInForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;
  signUpForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {}

  private initForm() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';

    if (this.isSignUpMode) {
      this.signUpForm = new FormGroup({
        firstName: new FormControl(firstName, Validators.required),
        lastName: new FormControl(lastName, Validators.required),
        email: new FormControl(email, [Validators.email, Validators.required]),
        password: new FormControl(password, [
          Validators.required,
          Validators.minLength(6),
        ]),
      });
    } else {
      this.signInForm = new FormGroup({
        email: new FormControl(email, [Validators.email, Validators.required]),
        password: new FormControl(password, [
          Validators.required,
          Validators.minLength(6),
        ]),
      });
    }
  }

  onSubmit() {
    console.log('SUBMITTED!');
  }

  handleAuthType() {
    this.isSignUpMode = !this.isSignUpMode;
    this.initForm();
  }

  handleGoogleSignIn() {
    // this.authService.googleAuth();
    this.store.dispatch(new GoogleSignIn());
  }
}
