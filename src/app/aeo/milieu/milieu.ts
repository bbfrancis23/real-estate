'use strict';

export class MenuItem {
  icon?: string;
  title: string;
  displayChildren?: boolean = false;
  children?: any;
  alias?: string;
  menuItems?: Array<MenuItem>
}

export interface Milieu {
  title: string;
  menuItems: Array<MenuItem>;
}
