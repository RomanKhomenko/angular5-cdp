import { NgModule } from '@angular/core';

import { HighlightBorderDirective } from './directives/highlight-border/highlight-border.directive';

@NgModule({
  declarations: [
    HighlightBorderDirective
  ],
  exports: [
    HighlightBorderDirective
  ]
})
export class SharedModule { }
