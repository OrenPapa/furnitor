# Mock DB

Static mock data for Furnitor UI development.

This package is intentionally simple. It gives the frontend realistic data before the backend and database exist.

Later, the NestJS backend can read from this package through a mock repository/service layer. When PostgreSQL and Prisma are added, the same service contracts can be moved from mock arrays to real database queries.
