import type { User } from './types'

export const users: User[] = [
  {
    id: 'user-admin-001',
    fullName: 'Arber Hoxha',
    email: 'admin@furnitor.al',
    role: 'SUPER_ADMIN',
    city: 'Tirana',
    createdAt: '2026-06-01T09:00:00.000Z',
  },
  {
    id: 'user-owner-001',
    fullName: 'Elira Dervishi',
    email: 'elira@packplus.al',
    role: 'ORGANIZATION_OWNER',
    city: 'Tirana',
    createdAt: '2026-06-04T10:30:00.000Z',
  },
  {
    id: 'user-owner-002',
    fullName: 'Gentian Kola',
    email: 'gentian@horecahub.al',
    role: 'ORGANIZATION_OWNER',
    city: 'Durres',
    createdAt: '2026-06-06T13:15:00.000Z',
  },
  {
    id: 'user-member-001',
    fullName: 'Mira Leka',
    email: 'mira@packplus.al',
    role: 'ORGANIZATION_MEMBER',
    city: 'Tirana',
    createdAt: '2026-06-08T08:45:00.000Z',
  },
  {
    id: 'user-buyer-001',
    fullName: 'Dritan Cela',
    email: 'dritan@example.com',
    role: 'USER',
    city: 'Vlore',
    createdAt: '2026-06-10T16:20:00.000Z',
  },
]
