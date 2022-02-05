export interface ChoresModel {
  items: Chore[]
}

export interface Chore {
  id: number
  title: string
  monday: boolean
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean
}