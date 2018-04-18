import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountDialog } from './account/dialog/dialog';
import { SettingsDialog } from './settings-dialog/settings-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private readonly BUTTON_SPACING = '20px';
  constructor(protected dialog: MatDialog, private overlayContainer: OverlayContainer) { }

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
}
