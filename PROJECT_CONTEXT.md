# Furnitor Project Context

This document is the source of truth for understanding the Furnitor project.  
AI coding tools should read this before making structural or implementation decisions.

---

## 1. Project Name

**Furnitor**

The name comes from the Albanian word for supplier. The platform is focused on helping users discover suppliers and business partners.

---

## 2. Product Overview

Furnitor is a **B2B supplier discovery platform for Albania**.

It helps businesses and individuals find:

- suppliers
- products
- services
- materials
- equipment
- business partners

The platform is not intended to be a full e-commerce marketplace in the MVP.  
There should be no cart, checkout, online payment, delivery tracking, or order management at the beginning.

The first version should focus on:

- discovery
- search
- supplier profiles
- organization profiles
- listings
- inquiries
- business connections

---

## 3. Simple Product Explanation

Organizations publish what they offer.  
Users search for what they need.  
Furnitor connects them.

Example:

A person opening a bar may need:

- paper cups
- takeaway food boxes
- packaging materials
- furniture
- tables
- chairs
- coffee machines
- cleaning supplies
- delivery materials
- POS systems

A packaging company can create a profile, explain what it supplies, add listings, and receive inquiries from interested buyers.

---

## 4. Product Positioning

Furnitor should be positioned as:

> A place where businesses in Albania showcase what they offer, and users find the suppliers, products, and services they need.

MVP tagline idea:

> Find suppliers for your business.

Albanian tagline idea:

> Gjej furnitorë për biznesin tënd.

---

## 5. What Furnitor Is

Furnitor is:

- a supplier discovery platform
- a B2B directory
- a business connection platform
- a place for organizations to showcase offers
- a search platform for users looking for business needs

---

## 6. What Furnitor Is Not In The MVP

Furnitor is not yet:

- an e-commerce store
- a checkout/payment platform
- a delivery/logistics platform
- an inventory management system
- a procurement automation platform
- a real-time chat platform
- a review-heavy marketplace

These features may come later, but they should not be included in the first version.

---

## 7. Target Users

### 7.1 Guest

A guest is a user who is not logged in.

Guests should be able to:

- visit the homepage
- understand what the platform does
- search for suppliers/listings
- browse categories
- view supplier profiles
- view listing details

Guests should not be able to:

- create organizations
- manage listings
- access dashboards
- manage inquiries
- invite members

Whether guests can send inquiries is a product decision for later. For now, keep this flexible.

---

### 7.2 Registered User

A registered user is a person with an account.

A registered user can:

- create a personal profile
- create an organization
- join an organization through invitation
- send inquiries later
- manage their own account

Important rule:

> A user is a person. An organization is a business.

One user may belong to multiple organizations.

---

### 7.3 Organization

An organization represents a business/company.

Examples:

- packaging supplier
- furniture supplier
- restaurant equipment company
- cleaning service company
- coffee machine distributor
- food supplier
- interior design company
- delivery material supplier

An organization can:

- create a public business profile
- add company information
- list products or services
- receive inquiries
- invite team members
- manage members

---

### 7.4 Organization Owner

The user who creates an organization becomes its owner.

The organization owner can:

- edit the organization profile
- create listings
- edit listings
- archive/delete listings
- invite members by email
- remove members
- view inquiries
- manage organization settings

---

### 7.5 Organization Member

A member belongs to an organization.

A member can help manage the organization depending on permissions.

Initial organization roles can be simple:

- OWNER
- MEMBER

Later roles may include:

- OWNER
- ADMIN
- MEMBER
- VIEWER

---

### 7.6 Super Admin

The super admin is the platform owner.

The super admin can:

- manage users
- manage organizations
- approve/reject organizations
- suspend organizations
- manage categories
- moderate listings
- view reports
- handle spam or abuse
- verify suppliers

---

## 8. Main MVP Flow

### Supplier / Organization Flow

1. User creates personal account.
2. User creates organization.
3. User becomes organization owner.
4. Owner completes organization profile.
5. Owner creates listings for products/services.
6. Owner invites organization members.
7. Organization receives inquiries from users.

---

### Buyer / User Flow

1. User or guest enters Furnitor.
2. User searches by keyword or category.
3. Platform shows matching listings and suppliers.
4. User opens listing or supplier profile.
5. User contacts supplier through available contact methods.
6. Deal continues outside the platform at first.

---

### Invitation Flow

1. Organization owner enters an email address.
2. Owner selects role for invited person.
3. Platform sends invitation email.
4. Invited person clicks invitation link.
5. If they already have an account, they log in.
6. If they do not have an account, they register.
7. After authentication, they become a member of the organization.

---

## 9. Core Product Concepts

### 9.1 User

A real person using the platform.

Examples:

- business owner
- supplier employee
- admin
- buyer
- individual looking for suppliers

---

### 9.2 Organization

A company/business workspace.

Organizations are public-facing business profiles and internal workspaces at the same time.

An organization has:

- public profile
- listings
- team members
- inquiries
- settings

---

### 9.3 Listing

A listing is something an organization offers.

Use the term **listing**, not only product, because organizations may offer both products and services.

Examples of listings:

- paper coffee cups
- takeaway food boxes
- custom packaging
- restaurant tables
- bar chairs
- coffee machines
- cleaning services
- POS installation
- interior design services

Listing types:

- PRODUCT
- SERVICE

---

### 9.4 Category

Categories help users browse and filter.

Examples:

- Packaging
- Furniture
- Equipment
- Cleaning Supplies
- Food & Beverage
- Services

Categories may later support nested subcategories.

Example:

Packaging

- Coffee Cups
- Food Boxes
- Paper Bags
- Napkins

---

### 9.5 Inquiry

An inquiry is a message from a user/buyer to an organization.

Example:

> Hi, I am opening a coffee shop in Tirana. I need 5,000 branded paper cups per month. Can you send me pricing?

Inquiries are not orders.  
They are business leads.

---

## 10. MVP Feature Scope

The MVP should include:

### Public Side

- homepage
- search page
- category browsing
- supplier/organization profile page
- listing detail page

### Auth Side

- register
- login
- profile basics

### Organization Side

- create organization
- organization dashboard
- edit organization profile
- create/edit listings
- view inquiries
- invite members

### Admin Side

- basic admin dashboard later
- users management later
- organizations management later
- categories management later
- listings moderation later

---

## 11. Features To Avoid For Now

Do not implement these in the first setup:

- payments
- checkout
- cart
- order management
- delivery tracking
- reviews
- ratings
- subscriptions
- analytics
- advanced verification
- real-time chat
- notification system
- complex permissions
- mobile app
- AI features

These can be considered later after the MVP is validated.

---

## 12. Technical Stack

### Package Management

Use:

- pnpm
- pnpm workspaces
- monorepo structure

---

### Frontend

Use:

- React
- TypeScript
- Vite
- Ant Design
- styled-components
- react-router-dom
- @phosphor-icons/react

At the initial setup stage, do not add form or validation libraries yet.

Do not add:

- react-hook-form
- zod
- TanStack Query
- Redux
- Zustand
- backend API layer

These can be added later when needed.

---

### Backend Later

Use later:

- NestJS
- PostgreSQL
- Prisma
- JWT authentication
- role-based access control
- email service for invitations

Do not implement backend yet unless explicitly requested.

---

### Database Later

Use later:

- PostgreSQL
- Prisma ORM

Initial planned tables:

- users
- organizations
- organization_members
- organization_invitations
- categories
- listings
- listing_images
- inquiries

Do not add database setup yet unless explicitly requested.

---

## 13. Monorepo Structure

The project should use this high-level structure:

```txt
apps/
  web/
  api/

packages/
  config/
  types/
  ui/
```

### apps/web

The frontend React application.

### apps/api

Reserved for the future NestJS backend.

### packages/config

Reserved for shared configuration later.

### packages/types

Reserved for shared TypeScript types later.

### packages/ui

Reserved for shared UI components later.

Do not overbuild packages at the beginning. Empty folders with README files are acceptable.

---

## 14. Root Files

The root should contain:

```txt
package.json
pnpm-workspace.yaml
.gitignore
README.md
PROJECT_CONTEXT.md
```

`pnpm-workspace.yaml` should include:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

---

## 15. Frontend Setup Direction

The frontend should be created with:

```bash
pnpm create vite apps/web --template react-ts
```

Core frontend dependencies:

```bash
pnpm --filter web add antd styled-components react-router-dom @phosphor-icons/react
```

Only install additional dependencies if specifically requested.

---

## 16. Frontend Design Direction

Furnitor should look like a modern business platform.

Style direction:

- clean
- professional
- trustworthy
- modern B2B SaaS
- blue primary color
- white and light gray backgrounds
- card-based layout
- simple navigation
- clear search experience
- not cluttered
- not overly playful
- not overcomplicated

The homepage should make it obvious that users can search for many business needs and find suppliers.

---

## 17. UI Principles

Use Ant Design for:

- buttons
- inputs
- layout helpers
- cards
- menus
- tables later
- modals later
- forms later
- dashboard components

Use styled-components for:

- page layout
- custom sections
- theme tokens
- landing page styling
- Ant Design overrides when needed

Do not over-customize Ant Design at the beginning.

Preferred rule:

> Ant Design for functional UI, styled-components for layout and branding.

---

## 18. Expected First Development Step

The first development step should only initialize the project.

Do:

- create pnpm monorepo
- create Vite React TypeScript app in apps/web
- create apps/api placeholder
- create packages placeholders
- add workspace config
- add root package.json
- add root .gitignore
- install core frontend libraries
- confirm that frontend runs

Do not:

- build homepage
- create full routing
- create dashboard
- implement auth
- implement backend
- implement database
- add Prisma
- add business logic

---

## 19. Initial Run Commands

Expected commands:

```bash
pnpm install
pnpm --filter web dev
```

The frontend should run from `apps/web`.

---

## 20. Development Philosophy

Keep the project:

- simple first
- scalable later
- cleanly structured
- easy to understand
- frontend-first for now
- not over-engineered

When implementing features, prefer small incremental steps.

Do not jump ahead into backend, database, auth, or complex app logic unless specifically asked.

---

## 21. Important Naming Rules

Use:

- `User` for a person
- `Organization` for a business/company
- `Listing` for a product or service offered by an organization
- `Inquiry` for a buyer lead/message
- `Category` for grouping listings

Avoid using only `Product`, because the platform supports services too.

---

## 22. MVP Success Criteria

The MVP is successful if:

> A supplier can create a profile, list what they offer, and receive inquiries from people searching the platform.

Everything else is secondary at the beginning.
