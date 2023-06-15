import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  template: `
    <!-- <span class="h-24 w-24" *ngIf="!loaded">
      <app-loading-spinner />
    </span> -->
    <img
      *ngIf="!loaded"
      src="../../../assets/blank_image_placeholder.webp"
      [ngClass]="imageClasses"
      style="position: absolute;"
    />
    <img
      [hidden]="!loaded"
      (load)="loaded = true"
      [ngSrc]="imagePath"
      [width]="imageWidth"
      [height]="imageHeight"
      [ngClass]="imageClasses"
    />
  `,
})
export class ImageLoaderComponent implements OnInit {
  @Input() imagePath: string;
  @Input() imageClasses: string;
  @Input() imageHeight: string;
  @Input() imageWidth: string;

  loaded = false;

  ngOnInit(): void {
    console.log('IMAGE ', this.imagePath);
    console.log('loaded ', this.loaded);
  }
}

// <img *ngIf="!loaded" src="http://smallenvelop.com/demo/image-loading/spinner.gif"/>
// [height]="loaded ? imageHeight : '1'"
