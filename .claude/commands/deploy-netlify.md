---
description: Clean up netlify.toml, connect the repo to Netlify, and point louiscolemancoding.me at the new build
---

## Context
`netlify.toml` already exists in the repo root, shaped for the old CRA build:

```toml
[build]
    command = "npm run build"
    functions = "functions"
    publish = "build"

[[redirects]]
    from = "/*"
    to = "index.html"
    status = 200
```

Run `/modernize-deps` and `/revamp-design` before this one if you haven't. If the build has
moved to Vite with `outDir: 'build'`, `publish = "build"` is already correct. Read the actual
current `netlify.toml` and build output before changing anything — confirm the publish
directory matches what the build tool actually produces.

## Steps

1. **Clean up `netlify.toml`**
   - Remove the `functions = "functions"` line unless an actual `functions/` directory exists
     in the repo — dead config otherwise.
   - Keep the `[[redirects]]` SPA fallback (`/* → /index.html`) — this is a client-routed
     single-page app and needs it.
   - Add:
     ```toml
     [build.environment]
       NODE_VERSION = "20"
     ```
     matching the `.nvmrc` from `/modernize-deps`.

2. **Connect the site in Netlify**
   - Check whether a Netlify site already exists for this repo (the README mentions
     `louiscolemanaltportfolio.netlify.app`) — if so, reuse it and trigger a redeploy off the
     updated `main` branch rather than creating a duplicate site.
   - If none exists: Netlify dashboard → "Add new site" → "Import an existing project" →
     connect the `portfolio-ts` GitHub repo → it should auto-detect build settings from
     `netlify.toml`.

3. **Point the custom domain — confirm before touching DNS**
   - `louiscolemancoding.me` is currently serving a *different*, older Webflow-built site —
     not anything in this repo. Before changing DNS, stop and confirm explicitly that this
     domain should be repointed at the new Netlify deploy. This is a real cutover of a live
     domain, not a routine redeploy.
   - Once confirmed: Netlify → Site settings → Domain management → Add custom domain →
     `louiscolemancoding.me`.
   - Find where the domain is currently registered/DNS-hosted (check Namecheap first) and
     either point nameservers at Netlify DNS, or add the CNAME/A/ALIAS records Netlify
     specifies for this domain at setup time.
   - Enable Netlify's automatic HTTPS (Let's Encrypt) once DNS propagates — can take up to
     24-48h after DNS changes.

4. **Post-deploy checks**
   - Load `https://louiscolemancoding.me` and confirm it serves the new dark-themed React app,
     not the old Webflow site.
   - Click through both nav tabs (Projects / Stack).
   - Confirm the Resume download link works.
   - Confirm the FedRate "View Live ↗" link opens
     `fedrate-production.up.railway.app/explorer`.
   - Spot-check mobile viewport (breakpoints at 768px, 992px, 1249px).
   - Run a Lighthouse pass and flag anything under ~90 on Performance/Accessibility as a
     follow-up item rather than fixing inline here.

## Acceptance criteria
- `louiscolemancoding.me` resolves to the new Netlify-hosted React app over HTTPS.
- Old Webflow content is no longer served at that domain — only after explicit confirmation
  in step 3.
- No broken links, no console errors, SPA routing survives a hard refresh.
