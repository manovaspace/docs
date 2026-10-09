# Contributing

This repository hosts the English public documentation for
[`@manovaspace/*`](https://manovaspace.github.io/docs/).

## Development

Use the declared Bun 1.4.0 and Node >=24 toolchain with committed `bun.lock`:

```bash
bun install --frozen-lockfile
bun run dev
bun run build
```

The build runs Astro build and Astro check. Review edited local and external
links separately; this command is not an exhaustive link checker.

## Pull requests

1. Create a topic branch from the current `main`; submit changes through a PR.
2. Keep guides generic: no private hosts, credentials or staff-only prerequisites.
3. Match the current content tree under `src/content/docs/`. Document actual
   exports and released availability; mark unreleased behavior explicitly.
4. Use Conventional Commit titles, including scopes (`docs(ui): ...`).
5. Link the package PR when public API documentation changes. Package-local
   docs belong in that package PR; consumer guides belong here. Private
   integration changes are handled separately by staff, without blocking
   generic contribution on access to the private handbook or MCP.
6. Run build/check and verify edited links. CI deploys successful merged `main`
   builds to `gh-pages`; site delivery uses the merged SHA, not an npm version.

The site currently has English content and no configured additional locales.
Changes to package locale support describe that package's verified behavior;
they do not imply the site or every product ships those locales.

Questions: open an [issue](https://github.com/manovaspace/docs/issues).
Security reports follow [SECURITY.md](./SECURITY.md). Contributions use the
repository's [MIT license](./LICENSE).
