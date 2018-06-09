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
  processing = false;
  message = { text: '', type: '' };

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

  submit() {
    this.processing = true;

    setTimeout(() => {
      this.accountService.authAccount(this.accountForm.value).then((result) => {

        this.processing = false;


        if (result.status === 0) {
          this.message.text = "Unknown Error. Please inform Site Administrator. Possible Database Failure.";
          this.message.type = 'danger';
        } else if (result.status === 400) {
          this.message.text = result.error;
          this.message.type = 'danger';
        } else {
          window.location.reload();
        }

      }).catch(err => {
        console.log(err);
        this.processing = false;
      });
    }, 5000)

  }
}
