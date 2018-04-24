import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { UrlDecodePipe } from './pipes/url-decode/pipe';
import { AeoSideDrawer } from './side-drawer/component';
import { AeoViewPort } from './view-port';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatTooltipModule
  ],
  declarations: [AeoViewPort, AeoSideDrawer, UrlDecodePipe],
  exports: [AeoViewPort, AeoSideDrawer, UrlDecodePipe]
})
export class AeoModule { }
