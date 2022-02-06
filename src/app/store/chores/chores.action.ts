export class ChoresToday {
  public static readonly type = 'Get chores for today'
}

export class ToggleItem {
  public static readonly type = 'Toggle item'
  public constructor(public id: string) { }
}