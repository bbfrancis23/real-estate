'use strict';

export class Account {
  _id: string;
  email: string;
  authenticated: boolean = false;
  admin: boolean = false;
  password: string;
  rank: number = 0;
  img: string;
  name: string;
  phone: string;
  type: string;
  theme: string;
  address: {
    address: string;
    city: string;
    state: string;
    zip: string;
  }

}
