import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';


import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

import { SelectionModel } from '@angular/cdk/collections';

import { AppService } from '../service';
import { AccountService } from '../account/service';

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



  constructor(public dialog: MatDialog, public agentService: AgentService, public appService: AppService, public accountService: AccountService) {

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
    if (this.agentService.clients) {

    } else {
      /*

      // */
    }
  }



  ngOnDestroy(): void {

    this.accountSub.unsubscribe();

  }
}
