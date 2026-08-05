# CMS-CHANGES.md

## Reconnaissance result (August 2026 refresh)

All copy for the Home page (`/`) and Critical Minerals page (`/critical-materials/`) lives in
this repository, in `locales/en/*.json` and `locales/fr/*.json`, rendered by
`src/pages/index.js` and `src/pages/critical-materials/index.js`.

Contentful is used **only** for news posts (`allContentfulPost`: title, slug, publish date,
hero image, body). No string edited in this refresh touches Contentful.

**Nothing requires manual entry in Contentful. This file is intentionally empty of
find/replace items.**

If the operator later moves page copy into Contentful, the canonical strings are the ones in
`locales/en/home.json`, `locales/fr/home.json`, `locales/en/critical-materials.json` and
`locales/fr/critical-materials.json` as of this commit.
