import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';

import { AgentService } from '../../../agent/service';
import { FormGroup } from '@angular/forms';

import { Account } from '../../account';

import { AddressControl } from '../../ctrls/address/component';
import { AccountNameControl } from '../../ctrls/account-name/component';

import { AccountService } from '../../service';
import { Subscription } from 'rxjs';

// new
import { EmailFormControl } from '../../../aeo/form-controls/email/component';
import { AccountNameFormControl } from '../../../aeo/form-controls/account-name/component';


@Component({
  selector: 'profile-vue',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ProfileVue implements OnInit, OnDestroy {



  @ViewChild(EmailFormControl) emailFormCtrl;
  @ViewChild(AccountNameFormControl) accountNameCtrl;

  @Input() 'mode': string // ACCOUNT / CLIENT / AGENT
  editPermission = false;

  @Output() close = new EventEmitter();

  nameEditMode = false;
  emailEditMode = false;

  showProfileVue = true;
  account: Account;
  clients: [any];

  clientSub: Subscription;



  nameForm = new FormGroup({});
  phoneForm = new FormGroup({});
  emailForm = new FormGroup({});

  constructor(public agentService: AgentService, public accountService: AccountService) {


  }

  ngOnInit() {
    if (this.mode === 'ACCOUNT' || this.mode === 'CLIENT') {
      //this.editPermission = true;
    }

    if (this.mode === 'CLIENT') {

      this.clientSub = this.agentService.currentSelectedClient.subscribe(client => {
        this.account = client;
      });


    }


    this.emailForm.addControl('email', this.emailFormCtrl.email);
    this.nameForm.addControl('accountName', this.accountNameCtrl.accountName);
  }



  nameSubmit() {
    this.accountService.updateName(this.nameForm.value.accountName, this.account._id).then(result => {
      if (result) {
        this.agentService.getClients();
        this.nameEditMode = false;
        this.account.name = this.nameForm.value.accountName;
        this.nameForm.reset();

      } else {

      }
    });
  }

  emailSubmit() {

    this.accountService.updateEmail(this.emailForm.value.email, this.account._id).then(response => {
      if (response.result) {
        this.agentService.getClients();
        this.emailEditMode = false;
        this.account.email = this.emailForm.value.email;
        this.emailForm.reset();
      } else {
        if (response.code === 11000) {
          this.emailForm.controls['email'].setErrors({ 'unique': true });
        } else {
          this.emailForm.controls['email'].setErrors({ 'database': true });
        }
      }
    });
  }

  ngOnDestroy() {
    this.clientSub.unsubscribe();
  }
}
