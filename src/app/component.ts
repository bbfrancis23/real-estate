import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountDialog } from './account/dialog/component';
import { AppService } from './service';
import { SettingsDialog } from './settings-dialog/component';
import { AccountService } from './account/service';
import { Router } from "@angular/router";
import { Account } from './account/account';

'use strict';

@Component({
  selector: 'app-root',
  templateUrl: './component.html',
  styleUrls: ['./styles.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private readonly BUTTON_SPACING = 20;
  private readonly BUTTON_SIZE = 50;
  private readonly ACCOUNT_DIALOG_SIZE = '250px'
  private lastTheme = 'cobra-kai-theme';



  themeSub = this.appService.currentTheme.subscribe(theme => {
    this.overlayContainer.getContainerElement().classList.remove(this.lastTheme);
    document.body.classList.remove(this.lastTheme);

    this.lastTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    document.body.classList.add(theme);
  });

  constructor(protected dialog: MatDialog, private overlayContainer: OverlayContainer, public appService: AppService, public accountService: AccountService) { }

  openAccountDialog() {
    let dialogRef = this.dialog.open(AccountDialog, { position: { top: `${this.BUTTON_SPACING}px`, right: `${this.BUTTON_SPACING}px` } });
  }

  openSettingsDialog() {
    let left = (this.BUTTON_SPACING + this.BUTTON_SIZE + this.BUTTON_SPACING);
    let dialogRef = this.dialog.open(SettingsDialog, { width: '250px', position: { top: `${this.BUTTON_SPACING}px`, left: '90px' } });
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.appService.defaultTheme);
    document.body.classList.add(this.appService.defaultTheme);
  }

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }
}
