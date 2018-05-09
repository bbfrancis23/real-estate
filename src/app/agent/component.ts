import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatDialog, MatDialogRef } from '@angular/material';
import { UpsertAccountDialog } from '../account/upsert-dialog/component';
import { AgentService } from './service';

@Component({
  selector: 'agent',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AgentComponent {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  displayedColumns = ['name', 'email', 'phone'];
  dataSource = ELEMENT_DATA;

  clients: any;
  clientsSub: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, public agentService: AgentService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  openClientDialog(action = 'NEW') {
    let dialogRef = this.dialog.open(UpsertAccountDialog, { data: { 'action': action } });
  }

  listClients() {
    if (this.agentService.clients) {

    } else {
      this.agentService.getClients();
      this.clientsSub = this.agentService.currentClients.subscribe(clients => {
        this.clients = clients;

        this.dataSource = this.clients;
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

export interface Element {
  name: string;
  email: string;
  phone: string;
}

const ELEMENT_DATA: Element[] = [
  { name: 'Hydrogen', email: 'bbfrancis23@gmail.com', phone: 'H' },
  { name: 'Helium', email: 'jody@gmail.com', phone: 'He' },
  { name: 'Lithium', email: 'angela@gmail.com', phone: 'Li' },
  { name: 'Beryllium', email: 'brian@gmail.com', phone: 'Be' },
  { name: 'Boron', email: 'chad@gmail.com', phone: 'B' },
  { name: 'Carbon', email: 'david@gmail.com', phone: 'C' },
  { name: 'Nitrogen', email: 'eldon@gmail.com', phone: 'N' },
  { name: 'Oxygen', email: 'orlando@gmail.com', phone: 'O' },
  { name: 'Fluorine', email: 'flo@gmail.com', phone: 'F' },
  { name: 'Neon', email: 'nada@gmail.com', phone: 'Ne' },
  { name: 'Sodium', email: 'saul@gmail.com', phone: 'Na' },
  { name: 'Magnesium', email: 'martin@gmail.com', phone: 'Mg' },
  { name: 'Aluminum', email: 'alice@gmail.com', phone: 'Al' },
  { name: 'Silicon', email: 'silvia@gmail.com', phone: 'Si' },
  { name: 'Phosphorus', email: 'paul@gmail.com', phone: 'P' },
  { name: 'Sulfur', email: 'saturn@gmail.com', phone: 'S' },
  { name: 'Chlorine', email: 'cher@gmail.com', phone: 'Cl' },
  { name: 'Argon', email: 'argon@gmail.com', phone: 'Ar' },
  { name: 'Potassium', email: 'peter@gmail.com', phone: 'K' },
  { name: 'Calcium', email: 'clyde@gmail.com', phone: 'Ca' },
];
