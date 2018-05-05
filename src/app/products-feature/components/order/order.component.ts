import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray  } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { CustomValidators } from '../../validators/custom-validators';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private validationMessages = {
    required: 'Please enter your email address.',
    emailMatch: 'The confirmation does not match the email address.',
    asyncEmailInvalid: 'Please enter a valid email address.'
  };

  proccedOrderForm: FormGroup;
  emailMessage: string;
  emailMessage2: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.createForm();
    // this.setFormValues();
    // this.patchFormValues();
    this.buildForm();
    this.watchValueChanges();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save() {
    // Form model
    console.log(this.proccedOrderForm);
    // Form value
    console.log(`Saved: ${JSON.stringify(this.proccedOrderForm.value)}`);
  }

  onChangeRegion(event: Event, value: string) {
      const cityControl = this.proccedOrderForm.get('city');

      if (value === '') {
        cityControl.clearValidators();
        cityControl.disable();
        cityControl.reset();
      } else {
        cityControl.setValidators(Validators.required);
        cityControl.enable();
      }
      cityControl.updateValueAndValidity();
  }

  get mobiles(): FormArray {
    return <FormArray>this.proccedOrderForm.get('mobiles');
  }

  addMobile(): void {
    this.mobiles.push(this.buildMobile());
  }

  private setMessage(c: AbstractControl) {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object
        .keys(c.errors)
        .map(key => this.validationMessages[key])
        .join(' ');
    }
  }

  private setMessage2(c: AbstractControl) {
    this.emailMessage2 = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage2 = Object
        .keys(c.errors)
        .map(key => this.validationMessages[key])
        .join(' ');
    }
  }

  private watchValueChanges() {
    const groupControl = this.proccedOrderForm.get('emailGroup');
    this.sub = groupControl.valueChanges
        .subscribe(value => this.setMessage2(groupControl));

    const emailControl = this.proccedOrderForm.get('emailGroup.email');
    this.sub = emailControl.valueChanges
      .pipe(
        debounceTime(2000)
      )
        .subscribe(value => this.setMessage(emailControl));

    const email2Control = this.proccedOrderForm.get('emailGroup.email2');
    const sub = email2Control.valueChanges
      // .pipe(
      //   debounceTime(1000)
      // )
      .subscribe(value => this.setMessage2(email2Control));
    this.sub.add(sub);
  }

  private createForm() {
    this.proccedOrderForm = new FormGroup({
      email: new FormControl(),
      contatName: new FormControl(),
      region: new FormControl(),
      city: new FormControl(),
      mobile: new FormControl()
    });
  }

  private setFormValues() {
    this.proccedOrderForm.setValue({
      email: 'roman_khomenko@epam.com',
      contatName: 'Roman',
      region: 'Belarus',
      city: 'Minsk',
      mobile: '+375445773422'
    });
  }

  private patchFormValues() {
    this.proccedOrderForm.patchValue({
      email: 'roman_khomenko@epam.com',
      contatName: 'Roman'
    });
  }

  private buildForm() {
    this.proccedOrderForm = this.fb.group({
      emailGroup: this.fb.group({
        email: ['roman_khomenko@epam.com', [Validators.required]],
        email2: ['', Validators.required],
      }, { validator: CustomValidators.emailMatcher }),

      // email: new FormControl('roman_khomenko@epam.com', { updateOn: 'blur' }),
      // email2: ['', [Validators.required]],
      contatName: ['Roman', [Validators.required]],
      region: [''],
      city: [{value: '', disabled: true}],
      mobiles: this.fb.array([this.buildMobile('+375445773422')])
    });
  }

  private buildMobile(value: string = ''): FormGroup {
    return this.fb.group({
      mobile: value
    });
  }
}
