import { Component } from '@angular/core';


@Component({
  selector: 'mat-dialog-cancel-ctrl',
  template: `<div class="dialog-ctrl"><button tabindex="-1" color="accent" mat-icon-button><mat-icon>cancel</mat-icon></button></div>`,
  styles: [
    `
    .dialog-ctrl{
      position: absolute;
      top: -20px;
      right: -20px;
    }
    `
  ]
})
export class MatDialogCancelCtrl {

}