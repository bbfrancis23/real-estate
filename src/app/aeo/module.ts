import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { UrlDecodePipe } from './pipes/url-decode/pipe';
import { AeoSideDrawer } from './side-drawer/component';
import { MediaViewPort } from './media-view-port/component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatTooltipModule

  ],
  declarations: [AeoSideDrawer, MediaViewPort, UrlDecodePipe],
  exports: [AeoSideDrawer, MediaViewPort, UrlDecodePipe]
})
export class AeoModule { }
