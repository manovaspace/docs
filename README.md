# manovaspace/docs

[![CI](https://github.com/manovaspace/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/manovaspace/docs/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/docs-manovaspace.github.io%2Fdocs-blue)](https://manovaspace.github.io/docs/)

Canonical public documentation for `@manovaspace/*` — MIT TypeScript libraries (utilities and design system).

**Live site:** [manovaspace.github.io/docs](https://manovaspace.github.io/docs/)

## Package repos

| Repo | Packages |
| --- | --- |
| [manovaspace/ts](https://github.com/manovaspace/ts) | tsconfig, markdown, pwa, observability |
| [manovaspace/design-system](https://github.com/manovaspace/design-system) | tokens, ui, devtools |

## Development

```bash
npm install
npm run dev      # local preview
npm run build    # production build + astro check
```

Built with [Astro Starlight](https://starlight.astro.build/). Content lives in `src/content/docs/`.

## Deploy

Push to `main` triggers `.github/workflows/ci.yml` → build + deploy to `gh-pages`.

This repo uses **npm** (not pnpm) — single Starlight app, no workspace packages.

Enable GitHub Pages: Settings → Pages → source `gh-pages` branch.

## License

MIT
