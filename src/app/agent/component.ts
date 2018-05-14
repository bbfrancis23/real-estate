import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';


import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

import { SelectionModel } from '@angular/cdk/collections';

import { AppService } from '../service';
import { AccountService } from '../account/service';
import { ControlPanelService } from '../aeo/control-panel/service';
import { ControlPanel } from '../aeo/control-panel/control-panel';

@Component({
  selector: 'agent',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AgentComponent implements OnInit, OnDestroy {

  showClientDataTable = false;

  account: Account;
  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;

    if (account.theme) {
      this.appService.changeTheme(account.theme + '-theme');
    }
  });

  agentControlPanel: ControlPanel = {
    title: 'Agent Control Panel',
    MenuItems: [{ icon: 'people', title: 'CLIENTS', children: [{ title: 'Add Client' },] }]
  };

  constructor(
    public accountService: AccountService, public agentService: AgentService, public appService: AppService,
    public controlPanelService: ControlPanelService,
    public dialog: MatDialog) {

  }


  ngOnInit() {
    this.controlPanelService.changeControlPanel(this.agentControlPanel);
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
