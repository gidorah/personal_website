# Project Context: Personal Website

## Overview

This is a personal website and portfolio application built with **Next.js 16**. It showcases the user's projects, experience, and skills. The project utilizes modern frontend technologies and follows a structured development workflow with containerization support.

## Key Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI, Lucide Icons)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Package Manager:** `pnpm`
- **Containerization:** Docker & Docker Compose
- **Task Automation:** `just`
- **Monitoring:** Sentry

## Architecture & Structure

The project follows the standard Next.js App Router structure:

- **`app/`**: Contains the application routes and pages (`page.tsx`, `layout.tsx`, `globals.css`).
  - `app/about/`: About page.
  - `app/work/`: Work/Projects page.
- **`components/`**: Reusable React components.
  - `ui/`: Base UI components (shadcn/ui implementation).
  - `hero-section.tsx`, `nav.tsx`, etc.: Feature-specific components.
- **`lib/`**: Utility functions (`utils.ts`).
- **`data/`**: Static data files for content (`experience.ts`, `projects.ts`, `skills.ts`).
- **`public/`**: Static assets (images, icons).
- **`compose/`**: Docker configuration files for different environments (local, staging, production).

## Development Workflow

### Prerequisites

- Node.js & pnpm
- Docker & Docker Compose (optional, for containerized dev)
- [`just`](https://github.com/casey/just) (optional, for command shortcuts)

### Building and Running

**Using pnpm (Direct):**

- **Development Server:** `pnpm dev` (Runs on http://localhost:3000)
- **Production Build:** `pnpm build`
- **Start Production Server:** `pnpm start`
- **Linting:** `pnpm lint`

**Using Just & Docker:**
The `justfile` provides convenient shortcuts for Docker operations:

- **Start Dev Environment:** `just up` (starts containers in background)
- **Stop Dev Environment:** `just down`
- **View Logs:** `just logs`
- **Rebuild Images:** `just build`
- **Prune (Clean up):** `just prune`

**Environment-Specific Docker:**

- **Staging:** `just staging_up`, `just staging_build`
- **Production:** Production definitions are in `docker-compose.production.yml`.

### Conventions & Standards

- **Code Style:** strict ESLint config (`eslint-config-next`) and Prettier are enforced.
- **Git Hooks:** Husky is configured to run pre-commit checks (lint-staged).
- **Commits:** Follow conventional commit messages.
- **Theme:** Supports light/dark mode via `next-themes`.
- **Data Management:** Content is primarily managed via static TS files in `data/`, making it easy to update without a database.

## Deployment

- The project is optimized for deployment on Vercel or self-hosted via Docker (Coolify).
- Production Dockerfiles are located in `compose/production/`.
