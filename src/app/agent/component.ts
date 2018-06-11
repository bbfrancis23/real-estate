import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Milieu, MenuItem } from '../aeo/milieu/milieu';
import { MilieuService } from '../aeo/milieu/service';

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
export class AgentComponent implements OnDestroy, OnInit {

  MENU_ITEMS = { ADD_CLIENT: 'NEW CLIENT' }

  milieu: Milieu = {
    title: 'AGENT MILIEU',
    menuItems: [
      {
        title: 'CLIENTS', icon: 'people',
        menuItems: [
          { title: this.MENU_ITEMS.ADD_CLIENT, icon: 'person_add' },
          { title: 'LIST CLIENTS', icon: 'list' },
        ]
      },


    ]
  };

  showClientDataTable = true;
  showProfileVue = true;

  account: Account;
  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;



    if (account) {
      if (account.theme) {
        this.appService.changeTheme(account.theme + '-theme');
      }

    }
  });

  constructor(
    public accountService: AccountService,
    public agentService: AgentService,
    public appService: AppService,
    public milieuService: MilieuService,
    public dialog: MatDialog) {

  }


  ngOnInit() {


    let themeMenuItems: Array<MenuItem> = [];
    let grot = this.appService.themes.forEach(theme => { themeMenuItems.push({ title: theme }) });

    this.milieu.menuItems.push({ title: 'THEMES', icon: 'palette', menuItems: themeMenuItems });

    this.milieuService.changeMilieu(this.milieu);
  }


  openClientDialog(action = 'NEW') {
    let dialogRef = this.dialog.open(UpsertAccountDialog, { data: { 'action': action }, panelClass: 'pinky' });
  }

  updateTheme(theme: string) {

    console.log(theme);

    this.appService.changeTheme(theme + '-theme');
    this.agentService.updateTheme(theme);
  }

  listClients() {
    this.showClientDataTable = true;
  }

  menuItemSelected(e) {
    //console.log(e);

    if (e.parent === 'THEMES') {
      this.updateTheme(e.child);
    } else if (e.child === this.MENU_ITEMS.ADD_CLIENT) {
      this.openClientDialog();
    } else if (e.child === 'LIST CLIENTS') {
      this.showClientDataTable = true;
    }
  }

  ngOnDestroy(): void {

    this.accountSub.unsubscribe();

  }
}
