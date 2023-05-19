import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '(document:click)': 'menuOutsideClickHandler($event)',
  },
})
export class HeaderComponent {
  isMenuOpen = false;
  user: any = null;

  @ViewChild('navButtonElement', { static: false })
  navButtonElementRef!: ElementRef;

  constructor(private _elRef: ElementRef) {}

  handleAuth() {
    if (!this.user) {
      this.user = 'User loaded!';
      console.log('Signed in!');
    } else {
      this.user = null;
      console.log('Signed out!');
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
}
