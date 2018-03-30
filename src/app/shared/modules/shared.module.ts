import { NgModule } from '@angular/core';

import { HighlightBorderDirective } from './directives/highlight-border/highlight-border.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  declarations: [
    HighlightBorderDirective,
    OrderByPipe
  ],
  exports: [
    HighlightBorderDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
