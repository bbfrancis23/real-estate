import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgentComponent } from './component';
import { AgentRoutingModule } from './routing.module';

import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { UpsertAccountDialog } from '../account/upsert-dialog/component';

@NgModule({
  imports: [
    AgentRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
  ],
  declarations: [AgentComponent, UpsertAccountDialog],
  entryComponents: [UpsertAccountDialog],
  exports: [AgentComponent]

})
export class AgentModule { }
