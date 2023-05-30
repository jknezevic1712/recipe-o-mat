import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [':host { width: 100%; height: 100%; display: flex; }'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isSignUpMode = false;
  authForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {}

  private initForm() {
    let email = '';

    if (this.isSignUpMode) {
      let password = '';

      this.authForm = new FormGroup({
        email: new FormControl(email, [Validators.email, Validators.required]),
        password: new FormControl(password, [
          Validators.required,
          Validators.minLength(6),
        ]),
      });
    } else {
      let password = '';

      this.authForm = new FormGroup({
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

  onSignUpHandler() {
    this.isSignUpMode = !this.isSignUpMode;
  }
}
