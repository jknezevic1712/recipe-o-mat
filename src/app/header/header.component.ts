import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Logout } from '../store/auth/auth.actions';

import { Subscription } from 'rxjs';

import { User } from '../store/auth/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '(document:click)': 'menuOutsideClickHandler($event)',
  },
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private userSub: Subscription;
  user: User = null;

  @ViewChild('navButtonElement', { static: false })
  navButtonElementRef!: ElementRef;

  constructor(
    private _elRef: ElementRef,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.store.select('auth', 'user').subscribe((userData) => {
      this.user = userData;
    });
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  handleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleKeyboardMenuClose(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      return (this.isMenuOpen = false);
    }

    return true;
  }

  menuOutsideClickHandler(e: MouseEvent) {
    if (
      this.isMenuOpen === true &&
      e.target !== null &&
      !this._elRef.nativeElement.children[0].children[1].contains(
        e.target as Node
      )
    ) {
      this.isMenuOpen = false;
    }
  }

  handleAuth() {
    if (this.user) {
      this.store.dispatch(new Logout());
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
