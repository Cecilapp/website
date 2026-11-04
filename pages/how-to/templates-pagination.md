---
title: Paginate a list of pages
description: Split long lists of pages (blog, sections, taxonomies) into several pages with Cecil pagination.
date: 2026-10-05
updated: 2026-10-16
schedule:
  publish: 2026-10-05
---
When a section contains many pages, Cecil can split its list into several pages (e.g. `/blog/`, `/blog/page/2/`, `/blog/page/3/`, etc.) and give you a _paginator_ to build the navigation links.

## Configure pagination

Pagination is enabled by default for list pages (_homepage_, _section_ and _term_), with 5 entries per page. Change it in `cecil.yml`:

```yaml
pages:
  pagination:
    max: 10    # maximum number of entries per page
    path: page # path of the paginated pages
```

## Override it for a section

Set the `pagination` variable in the front matter of the section index file (e.g. `pages/blog/index.md`):

```yaml
---
title: Blog
pagination:
  max: 20
---
```

Or disable it for this section only:

```yaml
---
pagination: false
---
```

## Display the paginated pages

The paginator only exists when the list contains more pages than `max`. When pagination is disabled, or when all the pages fit on a single page, `page.paginator` is empty.

In the list template (e.g. `layouts/blog/list.html.twig`), loop over `page.paginator.pages` and fall back to `page.pages.showable` when there is no paginator:

```twig
{% for p in page.paginator.pages ?? page.pages.showable %}
  <article>
    <h2><a href="{{ url(p) }}">{{ p.title }}</a></h2>
    <time datetime="{{ p.date|date('c') }}">{{ p.date|date('j M Y') }}</time>
  </article>
{% endfor %}
```

## Add navigation links

Paginator links are page IDs, so use the `url()` function to create working links. The `{% if page.paginator %}` test hides the navigation when there is no paginator:

```twig
{% if page.paginator %}
<nav>
  {% if page.paginator.links.prev is defined %}
  <a href="{{ url(page.paginator.links.prev) }}" rel="prev">Previous</a>
  {% endif %}
  <span>Page {{ page.paginator.current }} of {{ page.paginator.count }}</span>
  {% if page.paginator.links.next is defined %}
  <a href="{{ url(page.paginator.links.next) }}" rel="next">Next</a>
  {% endif %}
</nav>
{% endif %}
```

To list every page number, iterate from `1` to `page.paginator.count`:

```twig
{% if page.paginator %}
<nav>
  {% for i in 1..page.paginator.count %}
    {% if i == page.paginator.current %}
  <span aria-current="page">{{ i }}</span>
    {% elseif i == 1 %}
  <a href="{{ url(page.paginator.links.first) }}">{{ i }}</a>
    {% else %}
  <a href="{{ url(page.paginator.links.path ~ '/' ~ i) }}">{{ i }}</a>
    {% endif %}
  {% endfor %}
</nav>
{% endif %}
```

:::info
See the documentation of the [`page.paginator` variable](/documentation/templates/variables/#page-paginator), the [pagination configuration](/documentation/configuration/pages/#pages-pagination) and the [section `pagination` variable](/documentation/content/pages/#pagination).
:::
