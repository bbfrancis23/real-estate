'use strict';

export interface MenuItem {
  icon?: string;
  title: string;
  children?: [MenuItem];
}

export interface ControlPanel {
  title: string;
  MenuItems: [MenuItem];
}
