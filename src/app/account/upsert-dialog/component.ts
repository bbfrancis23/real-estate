import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

"use strict";

@Component({
  selector: 'client-dialog',
  templateUrl: 'component.html',
})
export class UpsertAccountDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


}
