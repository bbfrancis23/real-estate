import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

@Component({
  selector: 'agent',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AgentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  displayedColumns = [, 'img', 'name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource();

  clients: any;
  clientsSub: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, public agentService: AgentService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  openClientDialog(action = 'NEW') {
    let dialogRef = this.dialog.open(UpsertAccountDialog, { data: { 'action': action } });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  listClients() {
    if (this.agentService.clients) {

    } else {
      this.agentService.getClients().then(() => {
        this.clientsSub = this.agentService.currentClients.subscribe(clients => {
          this.clients = clients;

          this.dataSource.data = this.clients;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);

    if (this.clientsSub) {
      this.clientsSub.unsubscribe();
    }
  }
}
