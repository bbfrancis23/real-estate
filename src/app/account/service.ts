import { Injectable } from '@angular/core';

'use strict';

@Injectable()
export class AccountService {
  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
}
