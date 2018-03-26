import { NgModule } from '@angular/core';

import { Guid } from './models/guid';
import { HighlightBorderDirective } from './directives/highlight-border/highlight-border.directive';

@NgModule({
  providers: [Guid],
  declarations: [
    HighlightBorderDirective
  ],
  exports: [
    HighlightBorderDirective
  ]
})
export class SharedModule { }
