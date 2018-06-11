import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rec-iterator-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class VueRecordIteratorControl implements OnInit {
  @Input() type = 'back';
  @Output() iterate = new EventEmitter();

  ngOnInit() {

  }

  goBack() {
    this.iterate.emit('back');
  }
}
