---
title: Schedule the publication of a page
description: Publish or unpublish a Cecil page at a given date with the schedule front matter variable.
date: 2026-10-17
schedule:
  publish: 2026-10-17
---
With the `schedule` variable, a page can be written in advance and published later, or removed from the site after a given date.

## Publish a page at a date

The page is published only if the build date is on or after the `publish` date:

```yaml
---
title: Product launch
schedule:
  publish: 2026-11-15
---
```

## Unpublish a page after a date

The page is published only if the build date is on or before the `expiry` date:

```yaml
---
title: Summer sale
schedule:
  expiry: 2026-08-31
---
```

:::warning
Use `publish` **or** `expiry` in a page, not both: the page is published as soon as one of the two conditions is met.
:::

## Rebuild the site regularly

A static site doesn’t change by itself: the schedule is evaluated **at build time**. A page planned for November 15 will appear only after a build that runs on or after that date.

To make it automatic, rebuild the site every day. For example, with [GitHub Pages](/documentation/deploy/#github-pages), add a `schedule` trigger to the `on` section of your workflow:

```yaml
# .github/workflows/build-and-deploy.yml
on:
  push:
    branches: [master, main]
  schedule:
    - cron: '0 6 * * *' # every day at 6:00 UTC
  workflow_dispatch:
```

Most Jamstack platforms provide a similar feature (scheduled builds or build hooks triggered by a cron job).

:::tip
To check the result locally, run `php cecil.phar build --show-pages` and look for your page in the list of built pages.
:::

:::info
See the documentation of the [`schedule` variable](/documentation/content/#schedule) and of [continuous deployment](/documentation/deploy/#github-pages).
:::
