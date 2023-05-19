import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = false;
  user = null;

  handleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleSignOut() {
    console.log('Signed out!');
  }
}
