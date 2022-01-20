export class Login {
  public static readonly type = 'Login'
  public constructor(public email: string, public password: string) {}
}
