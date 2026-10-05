---
title: Redirect old URLs
description: Keep old links working in Cecil with the redirect and alias front matter variables.
date: 2026-10-13
schedule:
  publish: 2026-10-13
---
When a page moves or is renamed, its old URL should not lead to a 404 error. Cecil provides two front matter variables to handle this: `alias` and `redirect`.

## Redirect old URLs to a page

The `alias` variable lists the old paths of the current page. Each of them redirects to the page:

```yaml
---
title: About
alias:
  - contact
  - about-us
---
```

In this example, `/contact/` and `/about-us/` redirect to `/about/`.

## Redirect a page to another URL

The `redirect` variable turns a page into a redirection to the given URL, internal or external:

```yaml
---
title: Old documentation
redirect: "https://cecil.app/documentation/"
---
```

## Without a Markdown file

If the old page has no content anymore, declare it as a [virtual page](/documentation/configuration/#pages-virtual) in `cecil.yml`:

```yaml
pages:
  virtual:
    - path: code
      redirect: https://github.com/Cecilapp/Cecil
```

## Generated pages

For each alias and each redirection, Cecil renders a page with the built-in [`redirect.html.twig`](https://github.com/Cecilapp/Cecil/blob/main/resources/layouts/_default/redirect.html.twig) template. It contains:

- a `<link rel="canonical">` to the target URL
- a `<meta name="robots" content="noindex">` tag, so search engines don’t index it
- a `<meta http-equiv="refresh">` tag and a JavaScript redirection
- a fallback link for visitors

:::tip
To customize this page, create your own `layouts/redirect.html.twig` template: it takes precedence over the built-in one.
:::

:::info
See the documentation of the [`redirect`](/documentation/content/#redirect) and [`alias`](/documentation/content/#alias) variables.
:::
