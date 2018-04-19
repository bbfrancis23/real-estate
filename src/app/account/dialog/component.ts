import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service';

"use strict";

@Component({
  selector: 'account-dialog',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountDialog {

  readonly PASSWORD = this.accountService.PASSWORD;

  readonly LOGIN = "SIGN IN";
  readonly CREATE = "NEW ACCOUNT";
  readonly RESET_PASSWORD = "RESET PASSWORD";

  action = this.LOGIN;
  altAction: String = this.CREATE;
  private _inputType = 'password';

  readonly accountForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD.min), Validators.maxLength(this.PASSWORD.max), Validators.pattern(this.PASSWORD.pattern)])
  });

  readonly emailFC = this.accountForm.controls.email;
  readonly passwordFC = this.accountForm.controls.password;

  constructor(protected accountService: AccountService) { }

  clicky() {
    console.log(this.accountForm.valid);
  }

  getEmailError() {
    return this.emailFC.hasError('required') ? 'You must enter a value'
      : this.emailFC.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordError() {

    let password = this.passwordFC;

    return password.hasError('required') ? 'You must enter a value.'
      : password.hasError('pattern') ? 'Not a valid password.'
        : password.hasError('minlength') ? `You must enter at least ${this.PASSWORD.min} characters.`
          : password.hasError('maxlength') ? 'Too long.' : '';
  }

  tradeActions() {
    let LOGIN = this.LOGIN,
      CREATE = this.CREATE;

    if (this.action === LOGIN) {
      this.action = CREATE;
      this.altAction = LOGIN;
    } else {
      this.action = LOGIN;
      this.altAction = CREATE;
    }

    this.accountForm.reset();
  }

  set inputType(s: string) { this._inputType = s }
  get inputType() { return this._inputType }

  setActionResetPassword() {
    this.action = this.RESET_PASSWORD;
    this.accountForm.removeControl('password');
    this.accountForm.reset();
  }
}
