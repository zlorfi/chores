export interface ChoresModel {
  items: Chore[]
  summary: Day[]
}

export interface Chore {
  id: string
  task: string
  complete: boolean
}

export interface Day {
  day: {
    done: number,
    sum: number
  }
}