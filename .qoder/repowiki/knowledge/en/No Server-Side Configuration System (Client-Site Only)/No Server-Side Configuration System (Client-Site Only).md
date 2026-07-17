---
kind: configuration_system
name: No Server-Side Configuration System (Client-Site Only)
category: configuration_system
scope:
    - '**'
source_files:
    - js/app.js
    - js/data.js
---

This repository is a static, client-side marketing site for an electrical appliance repair business. It contains no server-side runtime, build toolchain, or configuration framework. There is no dedicated configuration system — no config files (.yaml, .toml, .env, application.properties), no config-loading logic in JavaScript, and no environment-based feature flags or secrets management.

The only user-facing "configuration" present is:
- Tailwind theme directives embedded inline in each HTML page (`tailwind.config = { ... }` blocks) that control dark-mode color tokens and font families at render time.
- Two small pieces of browser `localStorage` state managed by `js/app.js`: `voltfix-theme` (light/dark mode) and `voltfix-dir` (LTR/RTL direction). These are per-user preferences persisted in the browser, not application-wide configuration.
- Hardcoded mock data in `js/data.js` (services, articles, zip codes, FAQs) that serves as the site's content source.

Because this is a purely static front-end with no backend, build pipeline, or deployment-time configuration injection, there is no repository-wide configuration system to document.