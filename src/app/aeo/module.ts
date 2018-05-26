import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { UrlDecodePipe } from './pipes/url-decode/pipe';
import { AeoSideDrawer } from './side-drawer/component';
import { MediaViewPort } from './media-view-port/component';
import { MilieuComponent } from './milieu/component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DropDown } from './drop-down/component';

import { MatMenuModule } from '@angular/material/menu';
import { CloseCtrl } from './close-ctrl';

import { ModalVueComponent } from './milieu/modal-vue.component';
import { Vue } from './vue/component';
import { EmailFormControl } from './form-controls/email/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatMenuModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSidenavModule, MatExpansionModule, MatListModule, MatToolbarModule

  ],
  declarations: [EmailFormControl, ModalVueComponent, AeoSideDrawer, MediaViewPort, UrlDecodePipe, MilieuComponent, DropDown, CloseCtrl, Vue],
  exports: [EmailFormControl, ModalVueComponent, AeoSideDrawer, MediaViewPort, UrlDecodePipe, MilieuComponent, DropDown, CloseCtrl, Vue]
})
export class AeoModule { }
