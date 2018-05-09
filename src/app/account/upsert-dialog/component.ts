import { Component, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service';
import { AppService } from '../../service';
import { Account } from '../account';
import { AccountNameControl } from '../ctrls/account-name/component';
import { AddressControl } from '../ctrls/address/component'
import { EmailControl } from '../ctrls/email/component';
import { PasswordControl } from '../ctrls/password/component';
import { PhoneControl } from '../ctrls/phone/component';

"use strict";

@Component({
  selector: 'upsert-account-dialog',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class UpsertAccountDialog implements OnInit, OnDestroy {

  @ViewChild(AccountNameControl) accountNameCtrl;
  @ViewChild(AddressControl) addressCtrl;
  @ViewChild(EmailControl) emailCtrl;
  @ViewChild(PasswordControl) passwordCtrl;
  @ViewChild(PhoneControl) phoneCtrl;

  accountForm = new FormGroup({});

  account: Account;

  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;
  });


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public accountService: AccountService, public appService: AppService) {
    appService.getStates();

    console.log(this.account);

  }

  clicky() {

  }

  ngOnInit() {

    this.accountForm.addControl('email', this.emailCtrl.email);
    this.accountForm.addControl('password', this.passwordCtrl.password);
    this.accountForm.addControl('name', this.accountNameCtrl.accountName);
    this.accountForm.addControl('areaCode', this.phoneCtrl.areaCode);
    this.accountForm.addControl('prefix', this.phoneCtrl.prefix);
    this.accountForm.addControl('suffix', this.phoneCtrl.suffix);
    this.accountForm.addControl('address', this.addressCtrl.address);
    this.accountForm.addControl('city', this.addressCtrl.city);
    this.accountForm.addControl('state', this.addressCtrl.stateCtrl);
    this.accountForm.addControl('zip', this.addressCtrl.zip);
  }

  submit() {
    this.accountForm.value.type = 'Client';
    this.accountForm.value.agent = this.account._id;


    this.accountService.createAccount(this.accountForm.value);
  }

  ngOnDestroy() {
    this.accountSub.unsubscribe();
  }
}
