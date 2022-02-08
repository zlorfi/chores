export class ChoresToday {
  public static readonly type = 'Get chores for today'
}

export class ToggleItem {
  public static readonly type = 'Toggle item'
  public constructor(public id: string) { }
}

export class UpdateChore {
  public static readonly type = 'Update chore'
  public constructor(public id: string, public key: string, public value: boolean) { }
}

export class WeeklySummary {
  public static readonly type = 'Weekly summary'
}

export class GetChores {
  public static readonly type = 'Get all chores'
}