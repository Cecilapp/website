---
title: Add client-side search
description: Add a client-side search to a Cecil static site with a JSON index of pages and a small JavaScript library.
date: 2026-10-08
schedule:
  publish: 2026-10-08
---
A static site has no server-side search, but Cecil can generate a **JSON index of your pages** at build time. A few lines of JavaScript are then enough to search it in the browser.

## Create the index page

Create a page whose only [output format](/documentation/content/#output) is `json`, with a dedicated layout:

_pages/search.md_

```yaml
---
title: Search index
layout: search
output: json
excluded: true
---
```

[`excluded: true`](/documentation/content/#excluded) keeps this technical page out of list pages and the sitemap.

## Write the JSON template

Following the [lookup rules](/documentation/templates/#lookup-rules), Cecil renders this page with `layouts/search.json.twig`. Build an array of the [showable](/documentation/templates/#site) pages, then encode it:

```twig
{%- set index = [] -%}
{%- for p in site.pages.showable|filter(p => p.type == 'page') -%}
  {%- set index = index|merge([{
    title: p.title,
    url: url(p),
    description: p.description|default(''),
    content: p.content|striptags|excerpt(300)
  }]) -%}
{%- endfor -%}
{{ index|json_encode(constant('JSON_UNESCAPED_UNICODE') b-or constant('JSON_UNESCAPED_SLASHES'))|raw }}
```

After `php cecil.phar build`, the index is available at `/search.json`.

:::info
See the [`output` variable](/documentation/content/#output), the [output formats](/documentation/configuration/#output-formats) and the [`url` function](/documentation/templates/#url) documentation.
:::

## Search with Fuse.js

Add a search field to a template and load [Fuse.js](https://www.fusejs.io) from a CDN to query the index:

```twig
<input type="search" id="search" placeholder="Search…">
<ul id="results"></ul>

<script type="module">
  import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7/dist/fuse.mjs';

  const index = await fetch('{{ url('search', {format: 'json'}) }}').then(r => r.json());
  const fuse = new Fuse(index, { keys: ['title', 'description', 'content'], threshold: 0.3 });
  const results = document.getElementById('results');

  document.getElementById('search').addEventListener('input', (e) => {
    results.replaceChildren(...fuse.search(e.target.value, { limit: 10 }).map(({ item }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      li.append(a);
      return li;
    }));
  });
</script>
```

## Alternative: Pagefind

[Pagefind](https://pagefind.app) indexes the generated HTML files instead: no JSON template is needed. Run it after the build, on the output directory (`_site` by default):

```bash
php cecil.phar build
npx pagefind --site _site
```

Then load its UI in a template:

```twig
<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
  window.addEventListener('DOMContentLoaded', () => new PagefindUI({ element: '#search' }));
</script>
```

:::tip
The index is a regular page: to regenerate only JSON outputs, declare a [subset](/documentation/configuration/#pages-subsets) and run `php cecil.phar build --render-subset=<name>`.
:::
