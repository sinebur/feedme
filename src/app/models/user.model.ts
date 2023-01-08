export class User {
  public name: string;
  public email: string;
  public token: string;

  constructor(name: string, email: string, token: string) {
    this.name = name;
    this.email = email;
    this.token = token;
  }
}
