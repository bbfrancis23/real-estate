import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service';

"use strict";

@Component({
  selector: 'account-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.scss']
})
export class AccountDialog {

  private readonly PASSWORD = this.accountService.PASSWORD;

  private readonly LOGIN = "SIGN IN";
  private readonly CREATE = "NEW ACCOUNT";
  private readonly RESET_PASSWORD = "RESET PASSWORD";

  private action = this.LOGIN;
  private altAction: String = this.CREATE;
  private _inputType = 'password';

  private readonly accountForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD.min), Validators.maxLength(this.PASSWORD.max), Validators.pattern(this.PASSWORD.pattern)])
  });

  private readonly emailFC = this.accountForm.controls.email;
  private readonly passwordFC = this.accountForm.controls.password;



  constructor(protected accountService: AccountService) { }

  clicky() {
    console.log(this.accountForm.valid);
  }

  private getEmailError() {
    return this.emailFC.hasError('required') ? 'You must enter a value'
      : this.emailFC.hasError('email') ? 'Not a valid email' : '';
  }

  private getPasswordError() {

    let password = this.passwordFC;

    return password.hasError('required') ? 'You must enter a value.'
      : password.hasError('pattern') ? 'Not a valid password.'
        : password.hasError('minlength') ? `You must enter at least ${this.PASSWORD.min} characters.`
          : password.hasError('maxlength') ? 'Too long.' : '';
  }

  private tradeActions() {
    let LOGIN = this.LOGIN,
      CREATE = this.CREATE;

    if (this.action === LOGIN) {
      this.action = CREATE;
      this.altAction = LOGIN;
    } else {
      this.action = LOGIN;
      this.altAction = CREATE;
    }
  }

  set inputType(s: string) { this._inputType = s }
  get inputType() { return this._inputType }
}
