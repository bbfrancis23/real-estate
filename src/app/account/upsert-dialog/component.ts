import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service';

"use strict";

@Component({
  selector: 'client-dialog',
  templateUrl: 'component.html',
})
export class UpsertAccountDialog implements OnInit {

  accountForm = new FormGroup({});

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public accountService: AccountService) { }

  ngOnInit() {
    this.accountForm.addControl('email', this.accountService.emailCtrl);
    this.accountForm.addControl('password', this.accountService.passwordCtrl);
    this.accountForm.addControl('name', this.accountService.nameCtrl);
    this.accountForm.addControl('phoneAreaCode', this.accountService.phoneAreaCodeCtrl);
    this.accountForm.addControl('phonePre', this.accountService.phonePreCtrl);
    this.accountForm.addControl('phonePost', this.accountService.phonePostCtrl);
    this.accountForm.addControl('address', this.accountService.addressCtrl);
    this.accountForm.addControl('city', this.accountService.cityCtrl);
    this.accountForm.addControl('state', this.accountService.stateCtrl);
    this.accountForm.addControl('zip', this.accountService.photoCtrl);
  }
}
