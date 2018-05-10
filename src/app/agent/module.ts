import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgentComponent } from './component';
import { AgentRoutingModule } from './routing.module';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule, MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

import { UpsertAccountDialog } from '../account/upsert-dialog/component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailControl } from '../account/ctrls/email/component';

import { AccountModule } from '../account/module';
import { AgentService } from './service';
import { ClientDataTable } from './data-tables/clients/component';

@NgModule({
  imports: [
    AgentRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule, MatSidenavModule,
    MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule,
    ReactiveFormsModule,
    AccountModule
  ],
  declarations: [AgentComponent, ClientDataTable, UpsertAccountDialog, EmailControl],
  entryComponents: [UpsertAccountDialog],
  providers: [AgentService],
  exports: [AgentComponent]

})
export class AgentModule { }
