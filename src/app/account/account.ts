'use strict';

export interface Account {
  _id?: string;
  email: string;
  authenticated?: boolean;
  admin?: boolean;
  password?: string;
  updated: string;
  rank?: number;
  img?: string;
  name?: string;
  phone?: string;
  type?: string;
  theme?: string;
  address?: {
    address: string;
    city: string;
    state: string;
    zip: string;
  }
}
