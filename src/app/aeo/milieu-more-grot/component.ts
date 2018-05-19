/*import { Component } from '@angular/core';

import { Milieu } from './milieu';
import { MilieuService } from './service';

import { AppService } from '../../service';

@Component({
  selector: 'milieu',
  templateUrl: 'component.html',
  styleUrls: [`styles.scss`]
})
export class MilieuComponent {

  theme: string;
  themeSub = this.appService.currentTheme.subscribe(theme => this.theme = theme);

  milieu: Milieu;
  milieuMode = 'OPENED';
  milieuSub = this.milieuService.currentMilieu.subscribe(milieu => {
    this.milieu = milieu;
  });

  constructor(public milieuService: MilieuService, public appService: AppService) {

  }

  toggleMilieuMode() {
    //this.closeAllChildren();



    if (this.milieuMode === 'OPENED') {
      this.milieuMode = 'ICON';
    } else {
      this.milieuMode = 'OPENED';
    }

  }

  ngOnDestroy() {
    this.milieuSub.unsubscribe();
    this.themeSub.unsubscribe();
  }
}*/
