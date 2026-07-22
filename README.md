# Auth Starter — Site

The public website for Auth Starter, a reusable authentication foundation for
Next.js applications.

## Why this project exists

I am always creating small products and experimenting with new ideas. The
product changes, but the first development steps are often the same:
authentication, sessions, database configuration, protected routes, social
login, and password recovery.

Rebuilding that foundation for every project takes time away from the product
itself. Auth Starter is an effort to make that setup reusable, consistent, and
faster, so new applications can begin with a solid foundation instead of an
empty project.

## Current status

This repository currently contains the public landing page and visual identity
for Auth Starter.

Available now:

- Responsive landing page
- Project overview
- Adaptive branding and favicon
- Direct access to the template repository

Planned for later iterations:

- Public documentation
- Live authentication demo
- Architecture and implementation guides

## Repositories

The project is split into two repositories with separate responsibilities:

| Repository | Responsibility |
| --- | --- |
| [nextjs-auth-starter-site](https://github.com/patriciasegantine/nextjs-auth-starter-site) | Public website, documentation, and future live demo |
| [nextjs-auth-starter-template](https://github.com/patriciasegantine/nextjs-auth-starter-template) | Clean, reusable authentication foundation for new projects |

Keeping them separate ensures that applications created from the template do
not inherit marketing pages or documentation-specific code.

## Run locally

```bash
git clone git@github.com:patriciasegantine/nextjs-auth-starter-site.git
cd nextjs-auth-starter-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Future CLI

After the template has been validated in real projects, a possible evolution
is a CLI for creating a configured application from the terminal:

```bash
npx create-nextjs-auth-starter my-app
```

This is currently an idea under exploration, not a committed release.

## License

MIT
