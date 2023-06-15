import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';

@NgModule({
  imports: [CommonModule, NgOptimizedImage],
  declarations: [LoadingSpinnerComponent, ImageLoaderComponent],
  exports: [LoadingSpinnerComponent, ImageLoaderComponent],
})
export class SharedModule {}
