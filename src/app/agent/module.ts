import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgentComponent } from './component';
import { AgentRoutingModule } from './routing.module';

import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { ClientDialog } from './client-dialog/component';

@NgModule({
  imports: [
    AgentRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
  ],
  declarations: [AgentComponent, ClientDialog],
  entryComponents: [ClientDialog],
  exports: [AgentComponent]

})
export class AgentModule { }
