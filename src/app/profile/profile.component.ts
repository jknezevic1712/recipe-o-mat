import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../store/app.reducer';
import { EditUserData, FetchUserData } from '../store/auth/auth.actions';

import { User } from '../store/auth/auth.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [':host { width: 100%; height: 100%; }'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  isLoading = true;
  private authSub: Subscription;

  profileForm: FormGroup<{
    email: FormControl<string>;
    fullName: FormControl<string>;
    photoURL: FormControl<string>;
  }>;
  hasFormChanged = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.authSub = this.store.select('auth').subscribe((authState) => {
      this.user = authState.user;
      this.isLoading = authState.loading;
    });

    this.store.dispatch(new FetchUserData());

    this.initForm();
  }

  ngOnDestroy(): void {
    this.authSub ? this.authSub.unsubscribe() : null;
  }

  private initForm() {
    let email = this.user.email;
    let fullName = this.user.fullName;
    let photoURL = this.user.photoURL;

    this.profileForm = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      fullName: new FormControl(fullName, Validators.required),
      photoURL: new FormControl(photoURL, Validators.required),
    });
  }

  onCreateGroupFormValueChange() {
    const initialValue = this.profileForm.value;

    this.profileForm.valueChanges.subscribe((value) => {
      this.hasFormChanged = Object.keys(initialValue).some(
        (key) => this.profileForm.value[key] != initialValue[key]
      );
    });

    console.log('CHANGED ? ', this.hasFormChanged);
  }

  handleDisableSaveButton(): boolean {
    this.onCreateGroupFormValueChange();

    return (
      !this.profileForm.valid ||
      (this.profileForm.valid && !this.profileForm.dirty)
    );
  }

  onSubmit() {
    console.log('SUBMIT!');
    const newUserData = {
      ...this.profileForm.value,
    };

    this.store.dispatch(new EditUserData(newUserData as User));
  }
}
