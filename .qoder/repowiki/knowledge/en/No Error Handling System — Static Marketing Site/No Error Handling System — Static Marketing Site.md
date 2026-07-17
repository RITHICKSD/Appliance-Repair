---
kind: error_handling
name: No Error Handling System — Static Marketing Site
category: error_handling
scope:
    - '**'
---

This repository is a static, client-side marketing website for an electrical appliance repair shop. It contains only HTML pages, Tailwind CSS styling, and two small vanilla JavaScript files (`js/app.js` for UI behavior and `js/data.js` for mock data). There is no server-side code, no build pipeline, no runtime framework, and consequently no error-handling system.

The JavaScript code performs simple DOM manipulation (theme toggle, RTL/LTR switching, dropdowns, mobile drawer) and never uses `try/catch`, `throw`, `Promise.catch`, or any custom error types. All functions guard against missing elements with early returns (e.g. `if (!themeToggleBtn) return;`) rather than raising errors. The site has no network requests, no form submission logic, and no middleware layer where centralized error handling could live.