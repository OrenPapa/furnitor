export type UserRole = 'USER' | 'ORGANIZATION_OWNER' | 'ORGANIZATION_MEMBER' | 'SUPER_ADMIN'

export type OrganizationRole = 'OWNER' | 'MEMBER'

export type ListingType = 'PRODUCT' | 'SERVICE'

export type InquiryStatus = 'NEW' | 'REPLIED' | 'ARCHIVED'

export type VerificationStatus = 'UNVERIFIED' | 'PENDING' | 'VERIFIED'

export type User = {
  id: string
  fullName: string
  email: string
  role: UserRole
  city: string
  avatarUrl?: string
  createdAt: string
}

export type Category = {
  id: string
  name: string
  slug: string
  description: string
  parentId?: string
}

export type Organization = {
  id: string
  name: string
  slug: string
  description: string
  city: string
  address: string
  phone: string
  email: string
  website?: string
  categories: string[]
  verificationStatus: VerificationStatus
  ownerId: string
  memberIds: string[]
  foundedYear?: number
  createdAt: string
}

export type Listing = {
  id: string
  organizationId: string
  categoryId: string
  title: string
  slug: string
  type: ListingType
  description: string
  city: string
  deliveryAreas: string[]
  tags: string[]
  imageUrl?: string
  isFeatured: boolean
  createdAt: string
}

export type Inquiry = {
  id: string
  organizationId: string
  listingId?: string
  senderName: string
  senderEmail: string
  senderPhone?: string
  message: string
  status: InquiryStatus
  createdAt: string
}
