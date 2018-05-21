import { Component, Input } from '@angular/core';

@Component({
  selector: 'vue',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class Vue {
  @Input() icon: String;
  @Input() title: String;

  displayBody = 'true';
}
