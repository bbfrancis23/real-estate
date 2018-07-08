import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AeoModule } from '../aeo/module';
import { RealEstateClientRoutingModule } from './routing.module';
import { RealEstateClientComponent } from './component';

@NgModule({
  imports: [
    AeoModule,
    BrowserAnimationsModule,
    RealEstateClientRoutingModule,
  ],
  declarations: [RealEstateClientComponent],
  entryComponents: [],
  providers: [],
  exports: [RealEstateClientComponent]

})
export class RealEstateClientModule { }
