---
title: "What's new since version 8.79?"
description: "Summary of major features added between Cecil 8.80.0 and 8.106.0."
date: 2026-06-14
---
The latest major release is **8.106.0**. Here is a focused summary of the main features introduced since **Cecil 8.79.0**.

### Improved developer experience and performance visibility

- **Build progress indicator** (8.101.0): build execution now exposes a progress bar, making long-running operations easier to follow.
- **Extended metrics output** (8.101.0): metrics now include a total duration row with comparisons between runs, which helps track performance changes over time.
- **Raw timings and diff metrics** (8.87.0): build metrics now expose raw timings and diffs, making regressions and improvements easier to identify.

### Better template rendering

- **Dark-mode image variant support** (8.95.0): templates can now handle dedicated image variants for dark mode, improving visual adaptation.
- **`layouts.autoescape` option** (8.97.0): this setting provides finer control over template escaping behavior.
- **Translation disabled inside code blocks** (8.98.0): inline and fenced code are no longer translated, which helps preserve technical content accurately.
- **`cache_key` Twig helper** (8.88.0): templates can generate explicit cache keys for more predictable cache behavior.

### Quality and diagnostics tooling

- **New `doctor` command** (8.103.0): a dedicated diagnostics command was introduced to make project issues easier to identify.
- **New `doctor:seo` command** (8.105.0): a dedicated SEO audit command was added with matching documentation and tests.

### Better development workflow

- **Background `serve` mode and stop command** (8.104.0): the development server now supports background execution and explicit shutdown through `serve:stop`.
- **`.env` loading support** (8.106.0): environment configuration can now be loaded through dotenv, simplifying local variable management.
