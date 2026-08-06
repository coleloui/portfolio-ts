---
description: Apply the dark/teal theme revamp and update project + bio content, with FedRate and Enduvo as the lead projects
---

## Context
Read the current state of `src/global-styles.ts`, `src/components/Header.tsx`,
`src/components/aside.tsx`, `src/components/Footer.tsx`, `src/Pages/Body.tsx`,
`src/components/projects/ProjectInfo.ts`, `src/components/projects/Projects.tsx`, and
`src/components/TechStack/TechItems.ts` before editing — confirm current structure matches
what's described below, and adapt if it's drifted.

This portfolio is stale: bio says "Seattle, WA" (should be Tampa, FL), the project list is
outdated, the tech stack list has jQuery/Handlebars/"Kanba", and the visual design is a flat
gray-and-purple 2021-bootcamp look. Do a content + styling pass so it reads like a senior
full-stack engineer currently focused on AI/agent tooling, with FedRate and Enduvo — the two
most relevant projects — front and center. Keep the existing component architecture and file
layout; don't restructure unless something below requires it.

## 1. Theme (`src/global-styles.ts`)
Replace the flat `--primary: #744DA9` / `--secondary: #404040` scheme with a dark, teal-accented
palette as CSS custom properties on `:root`:

```
--bg: #0a0e14
--bg-elevated: #10151d
--bg-card: #131920
--border: #232b36
--border-hover: #333f4f
--text-primary: #e8edf3
--text-secondary: #8b96a5
--text-muted: #5a6472
--accent: #5eead4
--accent-dim: #2dd4bf
--accent-soft: rgba(94, 234, 212, 0.1)
--accent-glow: rgba(94, 234, 212, 0.35)
--mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace
--sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

Keep `--primary`, `--white`, `--secondary` as aliases to the new tokens so anything not
touched in this pass doesn't break.

Add a subtle two-point radial-gradient glow on `body` in teal, low opacity,
`background-attachment: fixed`. Set `box-sizing: border-box` globally. Restyle the scrollbar
to match the new palette.

**Fonts:** add JetBrains Mono (400/500/600/700) and Inter (400/500/600/700/800) via Google
Fonts `<link>` tags in `index.html`. Use `--mono` for nav links, tags, badges, and technical
labels; `--sans` for body copy and headings.

## 2. Header (`src/components/Header.tsx`)
- Sticky top bar, `backdrop-filter: blur(10px)`, semi-transparent dark background, bottom
  border in `--border`.
- Left: brand mark — small glowing teal dot + `louis.dev` in mono font (`.` in accent color).
- Right: nav buttons for "Projects" / "Stack" with active-state background (`--bg-card`) and
  text color shift (`--text-secondary` → `--text-primary`), plus a "Resume" button styled as
  a solid accent-colored CTA (dark text on teal background).
- Thread the active tab (`mainInfo`) down from `App.tsx` into `Header` as a prop alongside the
  existing `setMainInfo`, so the active nav state can render.

## 3. Bio (`src/components/aside.tsx`)
Replace the bio block with:
- **Eyebrow** above the name: `Tampa, FL · Available for contract`, small mono/accent text.
- **Name + role**: "Louis Coleman" / "Full Stack Software Engineer".
- **Bio copy**: "5+ years building production web applications, currently focused on AI/agent
  tooling — MCP servers, LLM-backed APIs, and the async Python/TypeScript infrastructure that
  runs them. I ship end to end: backend, frontend, and the deployment pipeline in between."
- **Tag row**: `React` `TypeScript` `Python` `FastAPI` `PostgreSQL` `MCP` as small mono pill
  badges, teal border/text on translucent accent background.
- Portrait becomes circular (160px, `object-fit: cover`, thin border).
- Keep the existing `<Social />` component and its links untouched.

## 4. Project data (`src/components/projects/ProjectInfo.ts`)
Extend the type:
```ts
export type ProjectEntry = {
  projName: string;
  minor: string;
  biograph: string;
  deployedLink?: string;
  github?: string;
  featured?: boolean;
  tech?: string[];
};
```

Order and content, top to bottom:

1. **FedRate** — `featured: true`. Minor: "Personal Project — Production Application". Bio
   covers: four-service Railway deployment (API, scraper, MCP server, frontend), PostgreSQL +
   Redis, FastAPI backend with async SQLModel/asyncpg, 11 years of historical rate data
   backfilled from the FRED API, slowapi rate limiting on Redis, the MCP server exposing rate
   data as agent tools, a Groq/Llama 3.3 70b chat endpoint, and the React/Vite frontend
   (dashboard, rate explorer, yield curve, chat). Mention GitHub Actions CI/CD with a
   dev → main branch workflow.
   `deployedLink: 'https://fedrate-production.up.railway.app/explorer'`.
   Tech tags: `FastAPI`, `MCP`, `PostgreSQL`, `Redis`, `React`, `TypeScript`, `Railway`,
   `Groq / Llama 3.3`. Leave `github` unset — the repo isn't public yet.

2. **Enduvo** — Minor: "Full Stack Software Engineer". Bio: TypeScript/React 3D application on
   a CQRS architecture with strictly typed DTO/DBO contracts; a custom Claude MCP server built
   for secure 3D asset delivery via pre-signed URLs; a Figma MCP integration that cut
   design-to-deployment cycle time by roughly 50%; a SketchFab façade microservice; Mixpanel
   analytics integration. No `deployedLink`/`github` — proprietary work. Tech tags:
   `TypeScript`, `React`, `MCP`, `CQRS`, `Figma API`, `Mixpanel`.

3. **Icarus** — keep existing content (Waveform Entertainment broadcast tool, Twitch OAuth,
   zero-downtime deploys). Tech tags: `MongoDB`, `Express`, `React`, `Node.js`, `Twitch OAuth`.

4. **Epic Physical Therapy** — keep as-is. `deployedLink: 'https://www.epic-pt.com/'`. Tech
   tags: `React`, `Material-UI`, `AWS SES`, `MongoDB Atlas`.

Drop any "Portfolio-MaterialUI" or "RocketList" entries if present — they don't serve the
senior-level positioning this revamp is going for.

## 5. Project card component (`src/components/projects/Projects.tsx`)
- Accept and render the new `featured` and `tech` props.
- Featured project: small "Featured" tag pill overlapping the top border, teal border instead
  of default gray (brightens on hover).
- "Live" badge (small pulsing teal dot + "Live" label, mono font) next to the title whenever
  `deployedLink` is set.
- Render `tech` as a row of small mono pill badges beneath the bio paragraph — reuse the same
  visual treatment as the bio tag row in `aside.tsx`.
- Links row: "View Live ↗" / "GitHub ↗" in accent color, mono font, underline on hover.

## 6. Tech Stack tab (`src/components/TechStack/TechItems.ts`)
Replace the outdated skill groups with:
- **Languages & Frameworks**: TypeScript/JavaScript, React/Node.js, Python/FastAPI, Styled-Components
- **Data & Infrastructure**: PostgreSQL/Redis, Docker, Railway, GitHub Actions CI/CD
- **AI / Agent Tooling**: MCP server development, Claude Code (daily use), LLM-backed APIs
  (Groq, Anthropic), agentic architecture design
- **Editor and Terminal**: CachyOS (Arch Linux), VS Code, Claude Code
- **Education**: Full Stack Web Development Bootcamp — University of Washington

## 7. Body layout (`src/Pages/Body.tsx`)
Constrain the flex wrapper to `max-width: 1200px`, centered, with side padding, so the layout
doesn't stretch edge-to-edge on wide monitors.

## 8. Footer (`src/components/Footer.tsx`)
- Fix the hardcoded copyright year — use `new Date().getFullYear()`.
- Restyle: top border in `--border`, mono font, small muted text, flex row with the copyright
  on one side and "Built with React & TypeScript" on the other, wrapping on small screens.
- Change from `position: absolute` to normal document flow so it doesn't overlap content on
  short pages.

## Flag back before deciding on your own
- Whether to bring back any older projects in a trimmed "earlier work" section.
- Whether the FedRate repo should be made public and linked.
- Whether Icarus's "Notable Broadcasts" list (Call of Duty League, EVO 2023, WoW Race to World
  First, etc., if present in `src/components/notables/`) should be surfaced more prominently.

## Acceptance criteria
- No references to Seattle anywhere in the codebase.
- FedRate and Enduvo are the first two entries in the project list, in that order.
- `npm run build` succeeds with no console errors.
- No leftover hardcoded `#404040` / `#744DA9` colors anywhere in `src/`.
