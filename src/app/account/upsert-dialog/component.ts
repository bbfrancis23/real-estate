import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
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

  }
}
