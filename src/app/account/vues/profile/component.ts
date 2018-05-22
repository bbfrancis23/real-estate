import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';

import { AgentService } from '../../../agent/service';
import { FormGroup } from '@angular/forms';

import { Account } from '../../account';

import { AddressControl } from '../../ctrls/address/component';
import { AccountNameControl } from '../../ctrls/account-name/component';

import { AccountService } from '../../service';

@Component({
  selector: 'profile-vue',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ProfileVue implements OnInit, OnDestroy {
  @Input() 'mode': string // ACCOUNT / CLIENT / AGENT
  editPermission = false;

  @Output() close = new EventEmitter();



  account: Account;

  clientSub = this.agentService.currentSelectedClient.subscribe(client => {

    this.account = client;
  });

  @ViewChild(AccountNameControl) accountNameCtrl;

  nameForm = new FormGroup({});

  constructor(public agentService: AgentService, public accountService: AccountService) {

  }

  ngOnInit() {
    if (this.mode === 'ACCOUNT' || this.mode === 'CLIENT') {
      this.editPermission = true;
    }

    if (this.mode === 'CLIENT') {
      this.nameForm.addControl('name', this.accountNameCtrl.accountName);

    }
  }

  nameSubmit() {
    //console.log(this.account._id, this.nameForm.value.name);
    this.accountService.updateName(this.nameForm.value.name, this.account._id)
  }

  ngOnDestroy() {
    this.clientSub.unsubscribe();
  }
}
