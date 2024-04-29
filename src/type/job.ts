export interface Job {
  title: string
  location: string
  salary: number
  id: number
}

export type OrderTerm = 'title' | 'salary' | 'location' | 'id'
