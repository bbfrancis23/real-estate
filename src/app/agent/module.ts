import { NgModule } from '@angular/core';
import { AgentComponent } from './component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgentRoutingModule } from './routing.module';

@NgModule({
  imports: [
    AgentRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [AgentComponent],
  exports: [AgentComponent]

})
export class AgentModule { }
