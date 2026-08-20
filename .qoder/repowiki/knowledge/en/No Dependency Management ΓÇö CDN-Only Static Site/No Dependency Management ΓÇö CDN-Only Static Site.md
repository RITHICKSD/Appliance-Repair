---
kind: dependency_management
name: No Dependency Management — CDN-Only Static Site
category: dependency_management
scope:
    - '**'
source_files:
    - index.html
---

This repository is a pure static HTML/CSS/JS marketing site with no dependency management system in place. There are no package manifests (package.json, go.mod, requirements.txt, etc.), no lockfiles, and no vendored third-party code. All external libraries are loaded directly from CDNs at runtime:

- Tailwind CSS via the Play CDN (`https://cdn.tailwindcss.com`) with an inline `tailwind.config` object per page.
- Font Awesome 6.4.0 via cdnjs (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`).
- Images sourced from Unsplash URLs embedded in HTML.

Every `.html` page repeats these `<script>` / `<link>` tags verbatim, so there is no shared manifest or build step to pin versions or centralize updates. The only locally managed assets are the project's own `css/style.css`, `js/app.js`, `js/data.js`, and image files — none of which depend on a package manager.