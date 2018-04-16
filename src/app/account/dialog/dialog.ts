import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from '../service';

"use strict";

@Component({
  selector: 'account-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.scss']

})
export class AccountDialog {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(this.accountService.PASSWORD.min), Validators.maxLength(this.accountService.PASSWORD.max), Validators.pattern(this.accountService.PASSWORD.pattern)]);
  hide = true;

  getEmailError() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(public accountService: AccountService) {

  }



  getPasswordError() {

    return this.password.hasError('required') ? 'You must enter a value.'
      : this.password.hasError('pattern') ? 'Not a valid password.'
        : this.password.hasError('minlength') ? `You must enter at least ${this.accountService.PASSWORD.min} characters.`
          : this.password.hasError('maxlength') ? 'Too long.' : '';
  }
}
