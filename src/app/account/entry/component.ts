import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountService } from '../service';
import { EmailFormControl } from '../../aeo/form-controls/email/component';
import { PasswordFormControl } from '../../aeo/form-controls/password/component';

@Component({
  selector: 'entry',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountEntry implements OnInit {

  @ViewChild(EmailFormControl) emailFormCtrl;
  @ViewChild(PasswordFormControl) passwordFormCtrl;

  inputType = 'password';

  readonly LOGIN = { title: "SIGN IN", icon: 'lock_open' };
  readonly CREATE = { title: "NEW ACCOUNT", icon: 'person_add' };
  readonly RESET_PASSWORD = { title: "FORGOT PASSWORD", icon: '?' }

  action = this.LOGIN;

  readonly accountForm = new FormGroup({});
  constructor(protected accountService: AccountService) { }

  ngOnInit() {
    this.accountForm.addControl('email', this.emailFormCtrl.email);
    this.accountForm.addControl('password', this.passwordFormCtrl.password);
  }
}
