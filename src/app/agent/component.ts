import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Account } from '../account/account'
import { AccountService } from '../account/service';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';

import { AgentService } from './service';
import { AppService } from '../service';

@Component({
  selector: 'agent',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AgentComponent implements OnDestroy {


  showClientDataTable = false;

  account: Account;
  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;

    if (account.theme) {
      this.appService.changeTheme(account.theme + '-theme');
    }
  });

  constructor(public accountService: AccountService, public agentService: AgentService, public appService: AppService, public dialog: MatDialog) {

  }





  openClientDialog(action = 'NEW') {
    let dialogRef = this.dialog.open(UpsertAccountDialog, { data: { 'action': action } });
  }

  updateTheme(theme: string) {
    this.appService.changeTheme(theme + '-theme');
    this.agentService.updateTheme(theme);
  }

  listClients() {
    this.showClientDataTable = true;
  }



  ngOnDestroy(): void {

    this.accountSub.unsubscribe();

  }
}
