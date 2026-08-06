---
description: Migrate portfolio-ts off Create React App onto Vite and bump the dependency stack to current stable majors
---

## Context
This repo was scaffolded in 2021 with Create React App (`react-scripts@4.0.3`), React 17,
TypeScript 4.4, and styled-components 5.3. CRA is dead — deprecated by Facebook in Feb 2025,
no longer maintained. This is also why `npm run build` currently fails on modern Node with
`error:0308010C:digital envelope routines::unsupported` and needs an
`--openssl-legacy-provider` workaround. Don't keep patching around that — replace the tool.

Read the actual current state of `package.json`, `public/index.html`, `src/index.tsx`, and
any `.eslintrc.js` before making changes — don't assume the versions below are still exactly
what's installed, check first.

## Goal
Migrate off `react-scripts` onto **Vite**, and bump the rest of the stack to current stable
majors, with zero change in visual output or component behavior.

## Actual current state (confirmed via `npm outdated`, so use these instead of guessing)

| Package | Currently installed | Latest available | Notes |
|---|---|---|---|
| react-scripts | 4.0.3 | 5.0.1 | irrelevant — being removed, not upgraded |
| react / react-dom | 17.0.2 | 19.2.8 | target 18, see step 2 |
| typescript | 4.4.3 | 7.0.2 | target latest 5.x, not 6/7 yet |
| styled-components | 5.3.1 | 6.5.0 | breaking: transient props |
| @types/react / @types/react-dom | 17.0.26 / 17.0.9 | 19.2.18 / 19.2.4 | match whatever React version you land on |
| @types/node | 12.20.27 | 26.1.2 | badly stale, bump to match `.nvmrc` (Node 20 → use `@types/node@^20`) |
| eslint | 7.32.0 | 10.8.0 | bump, expect config format changes (flat config) |
| eslint-plugin-prettier | 4.0.0 | 5.5.6 | bump alongside eslint |
| prettier | 2.4.1 | 3.9.6 | bump, expect minor formatting diffs on reformat |
| @testing-library/react | 11.2.7 | 16.3.2 | bump if tests are actually in use |
| @testing-library/jest-dom | 5.14.1 | 7.0.0 | same |
| @testing-library/user-event | 12.8.3 | 14.6.3 | same |
| @types/jest | 26.0.24 | 30.0.0 | same |

Confirmed **zero imports anywhere in `src/`** for these three — delete rather than upgrade:
- `react-router-dom` + `@types/react-router-dom`
- `@heroicons/react`
- `web-vitals`

## Steps

1. **Remove CRA, install Vite**
   - Remove `react-scripts` from `package.json`. Add `vite` and `@vitejs/plugin-react`.
   - Add `vite.config.ts`:
     ```ts
     import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react';

     export default defineConfig({
       plugins: [react()],
       build: {
         outDir: 'build', // keep 'build' so netlify.toml doesn't need to change
       },
     });
     ```
   - Move `public/index.html` to the project root as `index.html`, and add
     `<script type="module" src="/src/index.tsx"></script>` before `</body>`. Keep the rest
     of `public/` in place — Vite serves it as static assets automatically.
   - Update scripts in `package.json`:
     ```json
     "scripts": {
       "start": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
     ```
   - Replace any `%PUBLIC_URL%` references in `index.html` with plain root-relative paths
     (e.g. `%PUBLIC_URL%/favicon.ico` → `/favicon.ico`).
   - Remove the CRA `react-app-env.d.ts` and add `vite-env.d.ts` containing
     `/// <reference types="vite/client" />`.

2. **Bump core versions** — use the table above for exact current/target numbers.
   - `react` / `react-dom`: 17.0.2 → **18.x**. Don't jump straight to 19 in this pass —
     confirm styled-components 6.x and everything else has verified React 19 support first;
     treat 19 as a separate follow-up, not part of this task.
   - `typescript`: 4.4.3 → latest **5.x** (not 6/7 — hold off until eslint's TS tooling has
     caught up to those majors).
   - `styled-components`: 5.3.1 → **6.5.x**. v6 requires transient props (`$propName`) for any
     custom prop passed to a `styled.*` component that shouldn't hit the DOM — the codebase
     already uses `$active`/`$featured` this way in `Header.tsx` and `Projects.tsx`, so this
     should be a clean bump, but grep for any other non-`$`-prefixed custom props and fix them.
   - `@types/react` / `@types/react-dom`: bump to match whichever React 18.x you land on.
   - `@types/node`: 12.20.27 is pinned three Node majors behind — bump to `^20` to match the
     `.nvmrc` from step 4.
   - `eslint` 7.32.0 → 10.x is a 3-major jump and will likely require migrating
     `.eslintrc.js` to the new flat-config format (`eslint.config.js`) — budget real time for
     this rather than treating it as a drop-in bump. Bump `eslint-plugin-prettier` and
     `prettier` alongside it, then re-run `eslint --fix` and `prettier --write` across `src/`,
     since formatting defaults shifted between prettier 2 and 3.
   - `@testing-library/*` and `@types/jest`: only bump if there's an actual test suite using
     them (check for `.test.tsx`/`.spec.tsx` files first) — otherwise lower priority.

3. **Remove confirmed dead weight** — already verified zero usage in `src/`, delete outright
   rather than upgrading dependencies that do nothing:
   - `react-router-dom` + `@types/react-router-dom`
   - `@heroicons/react`
   - `web-vitals`

   Re-run `grep -rn "react-router\|heroicons\|web-vitals" src/` before deleting, in case
   something changed since this was last checked.

4. **Pin Node version**
   - Add `.nvmrc` containing `20`.
   - Remove `--openssl-legacy-provider` from any remaining scripts.

5. **Verify**
   - `npm install`
   - `npm run build` must complete with no flags/workarounds.
   - `npm run preview` and manually click through both nav tabs (Projects, Stack) to confirm
     styled-components theming and the resume download link still work.

## Acceptance criteria
- `npm run build` succeeds on Node 20+ with no env var workarounds.
- No `react-scripts` in `package.json`.
- Visual output identical to before this change — this is a tooling migration, not a design change.
- `git diff` shows only dependency/config/build-tooling changes, no unintended component edits.
