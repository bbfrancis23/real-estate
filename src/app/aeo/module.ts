import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { UrlDecodePipe } from './pipes/url-decode/pipe';
import { AeoSideDrawer } from './side-drawer/side-drawer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatTooltipModule
  ],
  declarations: [AeoSideDrawer, UrlDecodePipe],
  exports: [AeoSideDrawer, UrlDecodePipe]
})
export class AeoModule { }
