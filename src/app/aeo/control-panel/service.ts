import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ControlPanel } from './control-panel';

'use strict'

@Injectable()
export class ControlPanelService {

  controlPanel: ControlPanel;

  readonly controlPanelSource = new BehaviorSubject<ControlPanel>(this.controlPanel);
  readonly currentControlPanel = this.controlPanelSource.asObservable();
  public changeControlPanel(cp: ControlPanel) { this.controlPanelSource.next(cp) }



}
