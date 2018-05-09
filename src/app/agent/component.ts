import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDialog, MatDialogRef } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';

@Component({
  selector: 'agent',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AgentComponent {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  openClientDialog(action = 'NEW') {
    let dialogRef = this.dialog.open(UpsertAccountDialog, { data: { 'action': action } });
  }

  listCLients() {

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
