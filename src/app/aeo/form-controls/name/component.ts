import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-form-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class NameFormControl {

  @Input() submitButton = false;

}
