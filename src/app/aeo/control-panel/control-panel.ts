'use strict';

export class MenuItem {
  icon?: string;
  title: string;
  displayChildren?: boolean = false;
  children?: any;
  alias?: string;
}

export interface ControlPanel {
  title: string;
  MenuItems: [MenuItem];
}
