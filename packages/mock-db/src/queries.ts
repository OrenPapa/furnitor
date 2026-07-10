import { categories } from './categories'
import { inquiries } from './inquiries'
import { listings } from './listings'
import { organizations } from './organizations'
import { users } from './users'

export function getOrganizationBySlug(slug: string) {
  return organizations.find((organization) => organization.slug === slug)
}

export function getListingBySlug(slug: string) {
  return listings.find((listing) => listing.slug === slug)
}

export function getListingsByOrganizationId(organizationId: string) {
  return listings.filter((listing) => listing.organizationId === organizationId)
}

export function getInquiriesByOrganizationId(organizationId: string) {
  return inquiries.filter((inquiry) => inquiry.organizationId === organizationId)
}

export function getCategoryById(categoryId: string) {
  return categories.find((category) => category.id === categoryId)
}

export function getUserById(userId: string) {
  return users.find((user) => user.id === userId)
}
