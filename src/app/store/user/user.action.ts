export class Login {
  public static readonly type = 'Login'
  public constructor(public email: string, public password: string) {}
}

export class Logout {
  public static readonly type = 'Logout'
}
