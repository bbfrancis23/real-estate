import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material';
import { AccountDialog } from './account/dialog/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openAccountDialog() {
    let dialogRef = this.dialog.open(AccountDialog, { position: { top: '20px', right: '20px' } });
  }
}
