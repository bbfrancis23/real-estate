import { Component, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service';
import { AppService } from '../../service';
import { Account } from '../account';
import { PhoneControl } from '../ctrls/phone/component';

"use strict";

@Component({
  selector: 'client-dialog',
  templateUrl: 'component.html',
})
export class UpsertAccountDialog implements OnInit, OnDestroy {

  @ViewChild(PhoneControl) phoneCtrl;

  accountForm = new FormGroup({});

  account: Account;

  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;
  });


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public accountService: AccountService, public appService: AppService) {
    appService.getStates();
  }

  ngOnInit() {
    this.accountForm.addControl('email', this.accountService.emailCtrl);
    this.accountForm.addControl('password', this.accountService.passwordCtrl);
    this.accountForm.addControl('name', this.accountService.nameCtrl);
    this.accountForm.addControl('address', this.accountService.addressCtrl);
    this.accountForm.addControl('city', this.accountService.cityCtrl);
    this.accountForm.addControl('state', this.accountService.stateCtrl);
    this.accountForm.addControl('zip', this.accountService.photoCtrl);

    console.log(this.accountForm);
  }

  submit() {
    this.accountForm.value.type = 'Client';
    this.accountService.createAccount(this.accountForm.value);
  }

  ngOnDestroy() {
    this.accountSub.unsubscribe();
  }
}
