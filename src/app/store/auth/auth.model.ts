export class User {
  constructor(
    public id: string,
    public email: string,
    public fullName: string,
    public photoURL: string,
    public idToken: string
  ) {}
}
