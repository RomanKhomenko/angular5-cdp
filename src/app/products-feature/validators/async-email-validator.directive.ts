import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, first} from 'rxjs/operators';
import { CustomValidators } from './custom-validators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[asyncEmailValidator][formControlName], [asyncEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncEmailValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncEmailValidatorDirective implements Validator {
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable <ValidationErrors | null> {
    //  return this.validateEmailPromise(c);
    return this.validateEmailObservable(c)
     .pipe(
       debounceTime(1000),
       distinctUntilChanged(),
       first()
     );
  }

  private validateEmailPromise(c: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = CustomValidators.email(c);
        if (result) {
          resolve({
            asyncEmailInvalid: true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  private validateEmailObservable(c: AbstractControl) {
    return new Observable(observer => {
      const result = CustomValidators.email(c);
      if (result) {
        observer.next({
          asyncEmailInvalid: true
        });
      } else {
        observer.next(null);
      }
    });
  }
}
