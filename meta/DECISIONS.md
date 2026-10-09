# Documentation site decisions

## Approved (2026-07-16) — per-repo Pages

| Decision | Choice |
| --- | --- |
| **Generator** | [Astro Starlight](https://starlight.astro.build/) |
| **Phase A URL** | `https://manovaspace.github.io/ts/` and `/design-system/` (superseded) |

## Approved (2026-07-17) — unified docs repo (MS-FT-011)

| Decision | Choice |
| --- | --- |
| **Canonical repo** | `github.com/manovaspace/docs` |
| **URL** | `https://manovaspace.github.io/docs/` |
| **Generator** | Astro Starlight (`base: /docs`) |
| **Legacy URLs** | `/ts/` and `/design-system/` redirect to `/docs/...` |
| **Package manager** | Historical npm choice; superseded by the current declared Bun toolchain below |

## Current toolchain (verified 2026-10-05)

`package.json` declares `bun@1.4.0` and Node `>=24`; `bun.lock` is committed.
`.github/workflows/ci.yml` installs Bun 1.4.0, runs a frozen install, then
`bun run build` (Astro build and check). README, AGENTS and CONTRIBUTING follow
those actual sources. This remains a single app; using Bun does not require a
workspace monorepo. Consumer install examples may use other package managers.

Changes use topic branches and PRs. Successful merged `main` builds deploy to
`gh-pages`; the deployment version is the merged commit SHA. No npm package is
published by this repository. The site currently configures no extra locales
and its authored public content is English.

## Rationale

- Single docs repo avoids duplicated Starlight apps in package monorepos
- Package repos focus on code and npm releases
- Starlight retained — team familiarity, low migration cost

This `meta/` folder records public documentation decisions for the manovaspace org. It is not published to the Starlight site.

**MS-FT-011:** **done** — live at [manovaspace.github.io/docs](https://manovaspace.github.io/docs/).
