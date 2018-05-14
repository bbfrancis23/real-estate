import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { UrlDecodePipe } from './pipes/url-decode/pipe';
import { AeoSideDrawer } from './side-drawer/component';
import { MediaViewPort } from './media-view-port/component';
import { ControlPanelComponent } from './control-panel/component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DropDown } from './drop-down/component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatTooltipModule, MatSidenavModule, MatExpansionModule, MatListModule, MatToolbarModule

  ],
  declarations: [AeoSideDrawer, MediaViewPort, UrlDecodePipe, ControlPanelComponent, DropDown],
  exports: [AeoSideDrawer, MediaViewPort, UrlDecodePipe, ControlPanelComponent, DropDown]
})
export class AeoModule { }
