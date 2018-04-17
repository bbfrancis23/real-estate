import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { AeoSideDrawer } from './side-drawer/side-drawer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatTooltipModule
  ],
  declarations: [AeoSideDrawer],
  exports: [AeoSideDrawer]
})
export class AeoModule { }
