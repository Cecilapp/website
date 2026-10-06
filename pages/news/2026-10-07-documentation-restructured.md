---
title: "A restructured documentation"
description: "The documentation is now organized into sections and short pages, easier to browse and to search."
date: 2026-10-07
---
The [**documentation**](/documentation/) has been restructured: the long single pages (some of them over 1,500 lines!) have been split into **sections** made of shorter, focused pages.

This restructuring was made possible by the [**nested sections**](/documentation/content/pages/#sub-section) introduced in [Cecil 9](/news/2026/08/27/cecil-9.0.0-released/): any folder containing an `index.md` file becomes a sub-section of its parent section, with its own pages, layout fallback and breadcrumb. This website is built with Cecil, so the documentation is the first to benefit from it!

### New structure

The documentation is now organized into 8 sections:

1. [**Getting started**](/documentation/getting-started/): quick start, installation, directory structure and starter kits
2. [**Content**](/documentation/content/): pages, front matter, Markdown, multilingual and dynamic content
3. [**Templates**](/documentation/templates/): lookup rules, variables, components, localization, cache, extension, and a reference of [functions and filters](/documentation/templates/reference/)
4. [**Assets**](/documentation/assets/): images, processing and CDN providers (a brand new section, previously part of _Templates_)
5. [**Configuration**](/documentation/configuration/): one page per configuration topic (site, languages, pages, assets, output, cache, server, etc.)
6. [**Commands**](/documentation/commands/): `new:site`, `new:page`, `serve`, `build` and `doctor`
7. [**Deploy**](/documentation/deploy/): Jamstack platforms, continuous deployment and static hosting
8. [**Developers**](/documentation/developers/): extend Cecil, use it as a library and understand its architecture

### Easier navigation

- A **navigation tree** in the sidebar shows where you are and lets you unfold each section.
- Each section's home page lists its pages with a short description.
- The search now indexes every page and its introduction, so results point directly to the right topic.

The documentation is available in English and French. If you spot something wrong or missing, use the “Suggest a modification” link at the bottom of each page.
