# manovaspace/docs

[![CI](https://github.com/manovaspace/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/manovaspace/docs/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/docs-manovaspace.github.io%2Fdocs-blue)](https://manovaspace.github.io/docs/)

Public documentation for `@manovaspace/*` — MIT TypeScript libraries for Next.js (utilities and design system).

**Live site:** [manovaspace.github.io/docs](https://manovaspace.github.io/docs/)

## Package repositories

| Repository | Packages |
| --- | --- |
| [manovaspace/ts](https://github.com/manovaspace/ts) | build, tsconfig, markdown, pwa, observability |
| [manovaspace/design-system](https://github.com/manovaspace/design-system) | tokens, ui, devtools |

## Development

```bash
bun install --frozen-lockfile
bun run dev      # local preview
bun run build    # production build and Astro type/content diagnostics
```

Built with [Astro Starlight](https://starlight.astro.build/). Content lives in `src/content/docs/`.

This single Starlight app declares **Bun 1.4.0** and **Node >=24** in
`package.json`; commit `bun.lock` and use the same manager as CI. Consumer package
installation examples may use npm, pnpm or yarn. The current site is English;
no additional locales are configured.

## Deploy

Work on a topic branch and open a PR. CI builds and checks PRs; after merge, the
`main` push workflow deploys that successful build to the `gh-pages` branch.
Direct pushes to `main` are forbidden. Deployment authority is the merged commit
SHA, not the private root manifest version; this repo does not publish npm packages.

Enable GitHub Pages under **Settings → Pages**, source branch `gh-pages`.

## Contributing

Follow [CONTRIBUTING.md](./CONTRIBUTING.md). Package API changes update local docs
in the package PR and link a docs-site PR for consumer guides. Public contributors
need no private handbook, staff identity or MCP access. See
[SECURITY.md](./SECURITY.md) for security-report routing.

`astro check` verifies types/content diagnostics; build success alone does not
prove external URLs, live deployment health or every link target is valid.

## License

[MIT](./LICENSE)
