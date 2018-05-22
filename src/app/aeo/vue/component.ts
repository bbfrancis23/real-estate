import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vue',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class Vue {
  @Input() icon: String;
  @Input() title: String;

  @Output() close = new EventEmitter();

  displayBody = 'true';
}
