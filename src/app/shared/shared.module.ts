import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinnerComponent, OrderByPipe],
  exports: [LoadingSpinnerComponent, OrderByPipe],
})
export class SharedModule {}
