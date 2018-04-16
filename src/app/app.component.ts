import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountDialog } from './account/dialog/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private readonly BUTTON_SPACING = '20px';
  constructor(protected dialog: MatDialog) { }

  openAccountDialog() {
    let dialogRef = this.dialog.open(AccountDialog, { position: { top: this.BUTTON_SPACING, right: this.BUTTON_SPACING } });
  }
}
