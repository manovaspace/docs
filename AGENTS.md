# manovaspace/docs

Public documentation site for `@manovaspace/*` MIT TypeScript libraries.

**Naming:** Public copy uses **manovaspace** only. Orbit is Manova-team/staff (`orbit-docs`). Document `Orbit*` TypeScript exports as legacy identifiers, not product brand.

## Scope

- **This repo** — Starlight site at `manovaspace.github.io/docs/`
- **Not here** — package source (`manovaspace/ts`, `manovaspace/design-system`), staff docs (`orbit-docs`)

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
npm install
npm run dev
npm run build
```

## Editing

User-facing API changes in package repos should include a matching docs PR here. Package READMEs are minimal pointers to this site.
