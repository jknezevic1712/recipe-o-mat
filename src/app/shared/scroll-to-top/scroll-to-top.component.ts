import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
})
export class ScrollToTopComponent implements OnInit {
  windowScrolled = false;
  iconPath = '../../../assets/scroll_to_top_icon.png';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset > 600;
    });
  }

  scrollToTop() {
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
