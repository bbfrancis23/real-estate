'use strict';

export class MenuItem {
  icon?: string;
  title: string;
  displayChildren?: boolean = false;
  children?: [MenuItem];
}

export interface ControlPanel {
  title: string;
  MenuItems: [MenuItem];
}
