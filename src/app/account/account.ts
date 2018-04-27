'use strict';

export class Account {
  _id: string;
  email: string;
  authenticated: boolean = false;
  admin: boolean = false;
  rank: number = 0;
  img: string;
  name: string;
  phone: string;
  type: string;
  yourmom: string;
  address: {
    address: string;
    city: string;
    state: string;
    zip: string;
  }

}
