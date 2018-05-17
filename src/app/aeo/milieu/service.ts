import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Milieu } from './milieu';

'use strict'

@Injectable()
export class MilieuService {

  milieu: Milieu;

  readonly milieuSource = new BehaviorSubject<Milieu>(this.milieu);
  readonly currentMilieu = this.milieuSource.asObservable();
  public changeMilieu(m: Milieu) { this.milieuSource.next(m) }



}
