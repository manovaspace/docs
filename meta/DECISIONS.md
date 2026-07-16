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
| **Package manager** | **npm** for this repo (single app; no pnpm workspace) |

## Rationale

- Single docs repo avoids duplicated Starlight apps in package monorepos
- Package repos focus on code and npm releases
- Starlight retained — team familiarity, low migration cost

Staff planning (canonical, Manova workspace only): `docs/manovaspace/DOCUMENTATION-SITE.md`. This `meta/` copy is a public mirror — not the source of truth.

**MS-FT-011:** **done** — live at [manovaspace.github.io/docs](https://manovaspace.github.io/docs/).
