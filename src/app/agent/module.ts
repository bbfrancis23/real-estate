import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgentComponent } from './component';
import { AgentRoutingModule } from './routing.module';

import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatFormFieldModule, MatListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { UpsertAccountDialog } from '../account/upsert-dialog/component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AgentRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [AgentComponent, UpsertAccountDialog],
  entryComponents: [UpsertAccountDialog],
  exports: [AgentComponent]

})
export class AgentModule { }
