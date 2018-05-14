import { ChangeDetectorRef, Component } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ControlPanelService } from './service';

@Component({
  selector: 'control-panel',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class ControlPanel {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  mode = 'FULL';

  controlPanel: ControlPanel;
  controlPanelSub = this.controlPanelService.currentControlPanel.subscribe(controlPanel => {

  });

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public controlPanelService: ControlPanelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  toggleMode() {
    if (this.mode === 'FULL') {
      this.mode = 'ICON';
    } else {
      this.mode = 'FULL';
    }
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.controlPanelSub.unsubscribe();
  }
}
