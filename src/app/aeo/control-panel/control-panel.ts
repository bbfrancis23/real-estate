'use strict';

export class MenuItem {
  icon: string;
  title: string;
  children: [MenuItem];
}

export class ControlPanel {
  title: string;
  MenuItems: [MenuItem];
}
