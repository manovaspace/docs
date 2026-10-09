# manovaspace/docs

Public documentation site for `@manovaspace/*` MIT TypeScript libraries.

**Naming:** Public copy uses **manovaspace** only. Orbit is Manova-team/staff (`orbit-docs`). Document `Orbit*` TypeScript exports as legacy identifiers, not product brand.

## Scope

- **This repo** — Starlight site at `manovaspace.github.io/docs/`
- **Not here** — package source (`manovaspace/ts`, `manovaspace/design-system`), staff handbook and private product integration docs

## Content layout

```
src/content/docs/
├── index.mdx                 # Org home
├── contributing.mdx
├── utilities/                # manovaspace/ts packages
└── design-system/            # manovaspace/design-system packages
```

## Commands

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

Use the versions declared in `package.json` (Bun 1.4.0, Node >=24) and `bun.lock`.
CI runs those Bun commands. The current site is English with no extra locales.

## Editing

User-facing API changes include local docs in the package PR and a linked docs
PR here for consumer guides. Package READMEs point to this site. Repository-local
source, types, tests and build commands are sufficient for public contribution;
private handbook or MCP access is never a prerequisite.

Use topic branches and PRs. Deploy authority is the merged SHA: CI on PR runs
build/check, then successful `main` pushes deploy to `gh-pages`. No direct-main
push or package-version bump for site-only documentation changes. Inspect links
separately; `astro check` is not an exhaustive broken-link check.

Read [SECURITY.md](./SECURITY.md) for report routing. Do not claim private
vulnerability reporting is enabled unless verified in repository settings.
