import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

import { SelectionModel } from '@angular/cdk/collections';

import { AppService } from '../service';
import { AccountService } from '../account/service';

@Component({
  selector: 'agent',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AgentComponent implements OnInit {





  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  showClientDataTable = false;



  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, public agentService: AgentService, public appService: AppService, public accountService: AccountService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }




  ngOnInit() {

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

  /** Whether the number of selected elements matches the total number of rows. */


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);


  }
}
