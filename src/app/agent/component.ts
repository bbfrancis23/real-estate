import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDialog, MatDialogRef, MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

import { SelectionModel } from '@angular/cdk/collections';

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

  displayedColumns = [, 'img', 'name', 'email', 'phone', 'select'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<Account>(true, []);

  clients: any;
  clientsSub: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, public agentService: AgentService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  clicky() {
    console.log(this.selection);
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);

    if (this.clientsSub) {
      this.clientsSub.unsubscribe();
    }
  }
}
