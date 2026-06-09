---
title: How to apply SEO features in templates?
description: Add Cecil SEO features to templates with the metatags partial.
date: 2026-06-09
---
Cecil exposes its SEO feature through the `partials/metatags.html.twig` template. Include it in the `<head>` of your base template so every page automatically gets **meta tags, canonical links, social cards, and structured data**.

```twig
<html lang="{{ site.language }}">
  <head>
    <meta charset="utf-8">
    {{ include('partials/metatags.html.twig') }}
  </head>
  <body>
    ...
  </body>
</html>
```

The partial reads page front matter first, then falls back to site configuration when needed. See the [metatags configuration documentation](/documentation/configuration/#metatags) for all available options.

If you need to override the default title or image, pass values directly to the partial:

```twig
{{ include('partials/metatags.html.twig', {title: 'Custom title', image: og_image}) }}
```
