import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
  }]
})
export class EmailDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: boolean } | null {
    return CustomValidators.email(c);
  }
}
