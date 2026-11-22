---
see_also:
  - handbook/docs/orbit/decisions/067-licensing.md
  - handbook/docs/orbit/guides/open-commons.md
---

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

Use the versions declared in `package.json` (Bun 1.4.4, Node >=24) and `bun.lock`.
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

<!-- manova:conventions v1 — generated from manovaspace/ci conventions/core.md; edit it there -->
## Shared conventions

These rules apply to every Manova repository. They are copied from `manovaspace/ci` (`conventions/core.md`); change them there, not here.

### Delivery

1. Never push to `main`. Every change goes on a topic branch (`feat/<name>`, `fix/<name>`, `refactor/<name>`, `docs/<name>`, `chore/<name>`) and reaches `main` through a pull request.
2. One pull request does one thing. An unrelated problem you find on the way becomes an issue, not part of this change.
3. Pull request titles and commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`; `!` for a breaking change). Releases are computed from them.
4. Merge with squash once the checks are green. Do not use `--no-verify`; if you ever must, say so in the pull request.

### Checks

5. CI runs `manovaspace/ci@v1`. Run the same gate locally before you push; a red check is fixed, not skipped.
6. Tool versions (Go, Node, Bun, linters) come from `ci/versions.env` in `manovaspace/ci`. Do not pin a different version in this repository.
7. A behaviour change comes with a test that fails without it. Do not delete or weaken a test to make a change pass.

### Secrets

8. Never commit a secret, token, password, private key or `.env` file. Commit `.env.example` with placeholders instead.
9. Never print a secret in logs, test output, error messages or pull requests. Read secrets from the environment or a file at run time.

### Runtime

10. Containers talk to each other by name on a Docker network. Do not publish a port on the host unless a person or a host process needs it, and then bind `127.0.0.1`, never `0.0.0.0`.
11. Configuration comes from the environment. A service with a missing required setting refuses to start; it never falls back to a built-in secret or a development default in production.
12. Port numbers come from the workspace port registry. Do not invent a port.

### Documentation

13. This repository explains itself: `README.md` says how to set up, run, test and deploy it; `AGENTS.md` holds its binding rules; repository decisions live in `docs/decisions/`.
14. Write plain, short sentences. Keep exact names, paths, commands and versions. Do not document what the code already says.
<!-- /manova:conventions -->
