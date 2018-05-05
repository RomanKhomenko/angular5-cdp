import { AbstractControl, EmailValidator, ValidationErrors } from '@angular/forms';

const vaidator = new EmailValidator();
vaidator.email = true;

export class CustomValidators {
    static email(c: AbstractControl): ValidationErrors | null {
        return vaidator.validate(c);
    }

    static emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
        const email = c.get('email');
        const email2 = c.get('email2');

        if (email.pristine || email2.pristine) {
            return null;
        }

        if (email.value === email2.value) {
            return null;
        }

        return { 'emailMatch': true };
        }
}


