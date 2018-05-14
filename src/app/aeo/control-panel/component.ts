import { ChangeDetectorRef, Component } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ControlPanelService } from './service';
import { ControlPanel } from './control-panel';

@Component({
  selector: 'control-panel',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class ControlPanelComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  mode = 'OPEN';

  controlPanel: ControlPanel;

  controlPanelSub = this.controlPanelService.currentControlPanel.subscribe(cp => {
    this.controlPanel = cp;
  });

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public controlPanelService: ControlPanelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  toggleMode() {
    if (this.mode === 'OPEN') {
      this.mode = 'ICON';
    } else {
      this.mode = 'OPEN';
    }
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.controlPanelSub.unsubscribe();
  }
}
