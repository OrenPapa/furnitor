export * from './types'
export { categories } from './categories'
export { inquiries } from './inquiries'
export { listings } from './listings'
export { organizations } from './organizations'
export * from './queries'
export { users } from './users'

import { categories } from './categories'
import { inquiries } from './inquiries'
import { listings } from './listings'
import { organizations } from './organizations'
import { users } from './users'

export const mockDb = {
  categories,
  inquiries,
  listings,
  organizations,
  users,
}
