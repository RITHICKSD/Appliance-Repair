---
kind: frontend_style
name: Tailwind CSS + Custom Theme with Dark Mode and RTL
category: frontend_style
scope:
    - '**'
source_files:
    - index.html
    - about.html
    - css/style.css
---

The VoltFix site uses a lightweight, utility-first styling approach built on **Tailwind CSS (CDN)** combined with a small custom stylesheet for shared design tokens and responsive overrides.

**System & tooling**
- Tailwind CSS loaded via CDN (`https://cdn.tailwindcss.com`) in each HTML page's `<head>`.
- A per-page inline `tailwind.config` block extends the default theme: adds custom slate/indigo shades, registers `Inter` as sans and `Outfit` as heading font, and enables `darkMode: 'class'` so dark mode is toggled by adding/removing a `dark` class on `<html>`.
- Custom styles live in `css/style.css`, which imports Google Fonts and provides glassmorphism panels, micro-animations, scrollbar theming, RTL helpers, and mobile breakpoint overrides.
- Icons come from FontAwesome 6.4 via CDN; no component library or CSS-in-JS is used.

**Design tokens & palette**
- Typography: `font-family('Outfit', sans-serif)` for headings, `font-family('Inter', sans-serif)` for body — both declared in the Tailwind config and mirrored in CSS `:root` variables.
- Color system: Tailwind's `slate` palette is extended with intermediate shades (`350`, `450`, `650`, `750`, `805`, `808`, `850`) plus `indigo.150` / `indigo.650`; indigo serves as the primary accent, slate as neutral surface/text, with emerald/cyan used sparingly for status badges.
- Dark mode is applied through the `dark:` variant on every semantic element (backgrounds, borders, text, icons) and a `.transition-theme` class on `<html>` to animate color transitions between light/dark.

**Layout & responsiveness strategy**
- Layout is composed entirely of Tailwind utility classes: flexbox/grid containers, spacing scales, and responsive prefixes (`sm:`, `md:`, `lg:`).
- The custom `style.css` augments this with three explicit breakpoints — `≤479px` (small phones), `480–767px` (large phones), `640–1023px` (tablets), `≥1024px` (desktop) — that override grid columns, hero padding, typography sizes, and drawer behavior.
- Images are constrained globally (`max-width: 100%; height: auto`) and tables get a `.table-responsive` wrapper to scroll horizontally on narrow screens.

**RTL support**
- Each page sets `dir="ltr"` on `<html>` and exposes an LTR/RTL toggle button.
- When `dir="rtl"`, CSS hides `.ltr-only` elements, shows `.rtl-only` ones, flips transforms, and mirrors margins/padding via helper classes like `.mr-2-rtl` / `.ml-2-rtl`. Tailwind's native `rtl:` prefix is also used on navigation spacing.

**Dark mode mechanics**
- Toggle buttons call JS that adds/removes the `dark` class on `<html>`; the `transition-theme` class ensures smooth background/color transitions.
- Calendar picker indicator is inverted in dark mode via a vendor-specific rule.

**Conventions developers should follow**
- Always pair light-mode utilities with their `dark:` counterpart (e.g., `bg-white` → `dark:bg-slate-900`).
- Use the provided `font-heading` / `font-sans` Tailwind font families rather than hardcoding font names.
- Keep brand colors within the extended `slate` and `indigo` ranges; avoid introducing new ad-hoc hex values.
- For layout changes at small screens, prefer Tailwind responsive prefixes first; fall back to `css/style.css` media queries only when overriding third-party grids or complex components.
- Mark language-direction-sensitive elements with `ltr-only` / `rtl-only` and rely on the existing `html[dir]` selectors instead of writing custom direction rules.