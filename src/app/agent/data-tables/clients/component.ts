import { Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AgentService } from '../../service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AccountNameControl } from '../../../account/ctrls/account-name/component';
import { MatTable } from '@angular/material';

'use strict';

@Component({
  selector: 'client-data-table',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ClientDataTable implements OnInit, OnDestroy {

  nameForm = new FormGroup({});
  displayBody = true;

  @ViewChild(MatTable) matTable;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() close = new EventEmitter();
  @Output() openClientView = new EventEmitter();

  clients: [any];
  clientsSub: Subscription;

  //selectedClient: Account;

  //selectedClientSub = this.agentService.currentSelectedClient.subscribe(client => {

  //  this. = client;
  //});

  displayedColumns = ['img', 'name', 'email', 'phone', 'select'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(true, []); // any change to  Account

  constructor(public agentService: AgentService) {
    this.agentService.getClients().then(() => {
      this.clientsSub = this.agentService.currentClients.subscribe(clients => {



        this.clients = clients;

        this.dataSource.data = this.clients;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    });
  }



  ngOnInit() {
    //console.log('Init the object');
    //this.nameForm.addControl('name', this.accountNameCtrl.accountName);
  }

  nameSubmit() {

  }

  onElementClicked(row) {
    this.agentService.changeCurrentSelectedClient(row);
    this.openClientView.emit();

  }

  getName(name: string) {

    console.log(name);
    return 'McFly';
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
