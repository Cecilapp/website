---
title: "What's new since version 8.37?"
description: "List of changes since the release of Cecil 8.37.0."
date: 2025-12-03
typora-copy-images-to: ../../assets/images/news
---

### Major new features

- **Improved support for responsive images** — Added support for pixel density (DPR) for responsive images (allows optimization of srcset for high-density screens).
- **Ability to override robots.txt** — Ability to create a `pages/robots.md` page to replace the default `robots.txt`. Useful for managing indexing exclusions per project.
- **Improved post-processing** — Continued use of extension/post-processor capabilities (inherited from the 8.x branch) to enable final output processing.

### Improvements & usability

- **Simplified configuration structure** — Options are easier to disable (`option: false` or `option: enabled: false`); automatic import of theme configurations via `setConfig()` / `setSourceDir()`.
- **Redesigned/enhanced cache** — New, more robust cache mechanism (automatic rebuilding when files change), at the cost of a slight performance hit in some cases.
- **Improved error message handling and display** — Error messages are clearer to facilitate debugging.

### Major fixes

- **Updated remote asset management** — Remote assets are better managed (caching, fallback, etc.).
- **Fixes for templates and filters** — Cleanup of deprecated elements/those left in the documentation (following the 8.0 → 8.x migration) and various fixes related to asset/template rendering.

### Breaking changes & points of attention

- **Removal of default taxonomies** — `tag` and `category` are no longer created automatically: if you were using these taxonomies, you must **declare them explicitly** in the `taxonomies:` configuration. There is a risk of broken pages if you update without adapting the configuration.
- **Renaming/moving options** — Several options have been renamed or moved (e.g., `pagination` → `pages:pagination`, `paths` → `pages:paths`, `remote_fallback` → `fallback`, `force_slash` → `leading_slash`).
- **Check custom templates** — Some deprecated Twig files and filters were removed in the 8.x updates; you should review and update your custom templates.

---

### Recommended actions for migration

1. Explicitly add `taxonomies:` if you plan to use `tags`/`category`.
2. Check and adapt the renamed options (pagination, paths, assets fallback, leading_slash).
3. Test the complete build and verify the cache/remote assets.
4. Review the Twig templates (deprecated functions/filters) and take advantage of new features (DPR/pixel density in images).
