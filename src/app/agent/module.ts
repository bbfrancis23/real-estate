import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgentComponent } from './component';
import { AgentRoutingModule } from './routing.module';

import { MatButtonModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule, MatFormFieldModule, MatListModule, MatSelectModule, MatTableModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { UpsertAccountDialog } from '../account/upsert-dialog/component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailControl } from '../account/ctrls/email/component';

import { AccountModule } from '../account/module';
import { AgentService } from './service';

@NgModule({
  imports: [
    AgentRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule,
    ReactiveFormsModule,
    AccountModule
  ],
  declarations: [AgentComponent, UpsertAccountDialog, EmailControl],
  entryComponents: [UpsertAccountDialog],
  providers: [AgentService],
  exports: [AgentComponent]

})
export class AgentModule { }
