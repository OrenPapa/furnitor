import type { Inquiry } from './types'

export const inquiries: Inquiry[] = [
  {
    id: 'inquiry-001',
    organizationId: 'org-packplus',
    listingId: 'listing-paper-cups',
    senderName: 'Dritan Cela',
    senderEmail: 'dritan@example.com',
    senderPhone: '+355 69 900 1111',
    message:
      'I am opening a coffee shop in Vlore and need 5,000 branded paper cups per month. Can you send pricing?',
    status: 'NEW',
    createdAt: '2026-06-20T10:00:00.000Z',
  },
  {
    id: 'inquiry-002',
    organizationId: 'org-horeca-hub',
    listingId: 'listing-coffee-machines',
    senderName: 'Sara Meta',
    senderEmail: 'sara.meta@example.com',
    message:
      'We need one commercial coffee machine and grinder for a small hotel bar in Sarande.',
    status: 'REPLIED',
    createdAt: '2026-06-21T14:30:00.000Z',
  },
  {
    id: 'inquiry-003',
    organizationId: 'org-cleanpro',
    senderName: 'Klodian Basha',
    senderEmail: 'klodian@example.com',
    senderPhone: '+355 68 444 1212',
    message:
      'Please send details for monthly hygiene supply packages for a restaurant in Tirana.',
    status: 'NEW',
    createdAt: '2026-06-22T08:15:00.000Z',
  },
]
