import { Component, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AgentService } from '../../service';
import { Subscription } from 'rxjs';
import { AccountNameControl } from '../../../account/ctrls/account-name/component';
import { MatTable } from '@angular/material';
import { Account } from '../../../account/account';

'use strict';

@Component({
  selector: 'client-data-table',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ClientDataTable implements OnDestroy {

  displayBody = true;

  @ViewChild(MatTable) matTable;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() close = new EventEmitter();
  @Output() openClientView = new EventEmitter();

  clients: [Account];
  clientsSub: Subscription;

  selectedClient: Account;
  selectedClientSub: Subscription;

  displayedColumns = ['img', 'name', 'email', 'phone', 'select'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []);

  constructor(public agentService: AgentService) {

    this.agentService.getClients().then(() => {
      this.clientsSub = this.agentService.currentClients.subscribe(clients => {

        this.clients = clients;
        this.dataSource.data = this.clients;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        if (!this.selectedClient) {
          this.agentService.changeCurrentSelectedClient(this.clients[0]);
        } else {
          this.agentService.changeCurrentSelectedClient(this.clients.find((c) => c._id === this.selectedClient._id));
        }

        this.agentService.currentSelectedClient.subscribe(client => { this.selectedClient = client; });

      });
    });
  }

  onElementClicked(row, index) {
    this.agentService.changeCurrentSelectedClient(row);
    this.openClientView.emit();
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
    this.selectedClientSub.unsubscribe();
  }
}
