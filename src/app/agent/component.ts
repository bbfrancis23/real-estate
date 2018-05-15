import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';


import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

import { SelectionModel } from '@angular/cdk/collections';

import { AppService } from '../service';
import { AccountService } from '../account/service';
import { ControlPanelService } from '../aeo/control-panel/service';
import { ControlPanel, MenuItem } from '../aeo/control-panel/control-panel';
import { UrlDecodePipe } from '../aeo/pipes/url-decode/pipe';


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
    title: 'Agent Dashboard',
    MenuItems:
      [
        { icon: 'people', title: 'Clients', children: [{ title: 'Add Client' }, { title: 'List Clients' }] },
        { icon: 'palette', title: 'Themes' }

      ]
  };

  constructor(
    public accountService: AccountService, public agentService: AgentService, public appService: AppService,
    public controlPanelService: ControlPanelService,
    public dialog: MatDialog) {

  }


  ngOnInit() {

    let menuItems: Array<MenuItem> = [];

    this.appService.themes.forEach((t) => {
      menuItems.push({ title: new UrlDecodePipe().transform(t, true) })
    });
    this.agentControlPanel.MenuItems[1].children = menuItems;

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

  menuItemSelected(e) {

    if (e.child === 'Add Client') {
      this.openClientDialog();
    } else if (e.child === 'List Clients') {
      this.showClientDataTable = true;
    } else if (e.parent === 'Themes') {
      e.child = e.child.replace(/\b\w/g, first => first.toLocaleLowerCase());
      e.child = e.child.replace(/ /g, '-');
      this.updateTheme(e.child);
    }

  }

  ngOnDestroy(): void {

    this.accountSub.unsubscribe();

  }
}
