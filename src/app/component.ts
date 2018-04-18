import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountDialog } from './account/dialog/dialog';
import { AppService } from './service';
import { SettingsDialog } from './settings-dialog/settings-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private readonly BUTTON_SPACING = '20px';
  lastTheme = 'cobra-kai-theme';

  themeSub = this.appService.currentTheme.subscribe(theme => {
    this.overlayContainer.getContainerElement().classList.remove(this.lastTheme);
    document.body.classList.remove(this.lastTheme);

    this.lastTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    document.body.classList.add(theme);
  });

  constructor(protected dialog: MatDialog, private overlayContainer: OverlayContainer, public appService: AppService) { }

  openAccountDialog() {
    let dialogRef = this.dialog.open(AccountDialog, { position: { top: this.BUTTON_SPACING, right: this.BUTTON_SPACING } });
  }

  openSettingsDialog() {
    let dialogRef = this.dialog.open(SettingsDialog, { width: '250px', position: { top: '20px', left: '90px' } });
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add('cobra-kai-theme');
    document.body.classList.add('mat-app-background', 'cobra-kai-theme');
  }

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }
}
