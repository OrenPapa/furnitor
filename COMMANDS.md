# Furnitor Commands

Quick reference for local development.

## Install

```bash
pnpm install
```

## Frontend

Start the Vite frontend:

```bash
pnpm dev
```

Run the frontend package directly:

```bash
pnpm --filter web dev
```

Build the frontend:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Lint the frontend:

```bash
pnpm --filter web lint
```

## Backend

Start the NestJS API:

```bash
pnpm dev:api
```

Run the API package directly:

```bash
pnpm --filter api dev
```

Build the API:

```bash
pnpm build:api
```

Run the compiled API:

```bash
pnpm --filter api start
```

Default local API URL:

```txt
http://localhost:3000/api
```

## Workspace

Install a dependency for the frontend app:

```bash
pnpm add package-name --filter web
```

Install a dev dependency for the frontend app:

```bash
pnpm add -D package-name --filter web
```

## Notes

- The frontend app lives in `apps/web`.
- The future backend app is reserved in `apps/api`.
- Shared packages live in `packages/*`.
- `COMMANDS.md` is outside the Vite app and is not bundled by Vite.
