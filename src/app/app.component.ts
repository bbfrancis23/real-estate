import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountDialog } from './account/dialog/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

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

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add('cobra-kai-theme');
    document.body.classList.add('mat-app-background', 'cobra-kai-theme');
  }
}
