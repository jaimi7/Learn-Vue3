export interface Task {
  title?: string
  isFav: boolean
  id: number
}

export type OrderTerm = 'title' | 'salary' | 'location' | 'id'

export type FilterTerm = 'all' | 'fav'
