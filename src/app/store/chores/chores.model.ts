export interface ChoresModel {
  items: Chore[]
}

export interface Chore {
  id: string
  task: string
  complete: boolean
}