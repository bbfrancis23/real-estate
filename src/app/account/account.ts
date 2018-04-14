export class Account {

  static PASSWORD = { min: 5, max: 16, pattern: /^[^\s]+$/ }

  id: number;
  email: string;
  password: string;
}
