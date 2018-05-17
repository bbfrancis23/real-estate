import { Component, OnDestroy, ViewChild, } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AgentService } from '../../service';
import { Subscription } from 'rxjs';

'use strict';

@Component({
  selector: 'client-data-table',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ClientDataTable implements OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  clients: [any];
  clientsSub: Subscription;

  displayedColumns = ['img', 'name', 'email', 'phone', 'select'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []); // any change to  Account

  constructor(public agentService: AgentService) {
    this.agentService.getClients().then(() => {
      this.clientsSub = this.agentService.currentClients.subscribe(clients => {

        console.log(clients);

        this.clients = clients;

        this.dataSource.data = this.clients;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnDestroy() {
    this.clientsSub.unsubscribe();
  }
}
