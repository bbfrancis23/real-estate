import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AccountService } from '../service';
@Component({
  selector: 'entry',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountEntry {

  inputType = 'password';

  readonly PASSWORD = this.accountService.PASSWORD;

  readonly LOGIN = "SIGN IN";
  readonly CREATE = "NEW ACCOUNT";
  readonly RESET_PASSWORD = "FORGOT PASSWORD"

  action = this.LOGIN;

  readonly accountForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.max(this.accountService.EMAIL.max)]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD.min), Validators.maxLength(this.PASSWORD.max), Validators.pattern(this.PASSWORD.pattern)])
  });

  readonly emailCtrl = this.accountForm.controls.email;
  readonly passwordCtrl = this.accountForm.controls.password;

  constructor(protected accountService: AccountService) { }

  getEmailError() {
    return this.emailCtrl.hasError('required') ? 'You must enter a value'
      : this.emailCtrl.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordError() {

    let password = this.passwordCtrl;

    return password.hasError('required') ? 'You must enter a value.'
      : password.hasError('pattern') ? 'Not a valid password.'
        : password.hasError('minlength') ? `You must enter at least ${this.PASSWORD.min} characters.`
          : password.hasError('maxlength') ? 'Too long.' : '';
  }
}
