export interface ChoresModel {
  items: DailyChore[]
  summary: Day[]
  chores: Chore[]
}

export interface DailyChore {
  id: string
  task: string
  complete: boolean
}

export interface Day {
  date: string,
  done: number,
  sum: number
}

export interface Chore {
  id: string,
  title: string,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean,
}