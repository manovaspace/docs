# manovaspace/docs

[![CI](https://github.com/manovaspace/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/manovaspace/docs/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/docs-manovaspace.github.io%2Fdocs-blue)](https://manovaspace.github.io/docs/)

Public documentation for `@manovaspace/*` — MIT TypeScript libraries for Next.js (utilities and design system).

**Live site:** [manovaspace.github.io/docs](https://manovaspace.github.io/docs/)

## Package repositories

| Repository | Packages |
| --- | --- |
| [manovaspace/ts](https://github.com/manovaspace/ts) | tsconfig, markdown, pwa, observability |
| [manovaspace/design-system](https://github.com/manovaspace/design-system) | tokens, ui, devtools |

## Development

```bash
npm install
npm run dev      # local preview
npm run build    # production build and Astro check
```

Built with [Astro Starlight](https://starlight.astro.build/). Content lives in `src/content/docs/`.

This repository uses **npm** (not pnpm): a single Starlight app with no workspace packages.

## Deploy

Pushing to `main` runs `.github/workflows/ci.yml`, which builds the site and deploys to the `gh-pages` branch.

Enable GitHub Pages under **Settings → Pages**, source branch `gh-pages`.

## Contributing

Update package documentation in this repository when public APIs change. Keep package READMEs short and point here for full guides.

## License

[MIT](./LICENSE)
