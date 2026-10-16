---
title: Publish an RSS or JSON feed
description: Publish RSS, Atom or JSON feeds of your Cecil site with output formats and built-in templates.
date: 2026-10-06
schedule:
  publish: 2026-10-06
---
Cecil renders feeds with **output formats**: by default, the home page, sections and taxonomy terms are already published in HTML **and Atom** (e.g. `/atom.xml`, `/blog/atom.xml`). Add the `rss` or `jsonfeed` formats to publish RSS 2.0 or [JSON Feed](https://www.jsonfeed.org) files too.

## Enable feeds for all list pages

Set the formats applied to each page type with `output.pagetypeformats`:

```yaml
output:
  pagetypeformats:
    homepage: [html, atom, rss, jsonfeed]
    section: [html, atom, rss, jsonfeed]
```

Cecil now generates `rss.xml` and `feed.json` next to each `index.html` of the home page and sections (e.g. `/blog/rss.xml`, `/blog/feed.json`).

:::info
Formats are replaced, not merged: keep `html` in the list. See [`output.pagetypeformats`](/documentation/configuration/#output-pagetypeformats) and the list of [default formats](/documentation/configuration/#output-formats).
:::

## Enable a feed for a single section

To publish a feed only for one section, use the [`output`](/documentation/content/#output) variable in the front matter of the section index page:

```yaml
---
title: Blog
output: [html, rss]
---
```

## Advertise the feed

If your templates include the [metatags partial](/documentation/configuration/#metatags), `<link rel="alternate">` tags pointing to the feeds of the current page are added automatically in the `<head>`.

Otherwise, add the link yourself with the `url()` function and its `format` option:

```twig
<link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ url(page, {canonical: true, format: 'rss'}) }}">
```

## Customize the feed template

Feeds are rendered by the [built-in templates](/documentation/templates/#built-in-templates) `_default/list.rss.twig`, `_default/list.atom.twig` and `_default/list.jsonfeed.twig`. Following the [lookup rules](/documentation/templates/#lookup-rules), create `layouts/list.rss.twig` (all list pages) or `layouts/blog/list.rss.twig` (`blog` section only) to override them.

You can extend the built-in template and redefine only the `item` block, for example to publish an excerpt instead of the full content:

```twig
{% extends '_default/list.rss.twig' %}

{% block item %}
      <guid>{{ url(item, {canonical: true}) }}</guid>
      <title>{{ item.title|e }}</title>
      <pubDate>{{ item.date|date('r') }}</pubDate>
      <link>{{ url(item, {canonical: true}) }}</link>
      <description><![CDATA[{{ item.content|excerpt_html }}]]></description>
{% endblock %}
```

:::tip
Set [`baseurl`](/documentation/configuration/#baseurl) in `cecil.yml`: feeds use absolute URLs.

The RSS feed can also be styled in browsers by enabling the `xsl/rss` [default page](/documentation/configuration/#pages-default):

```yaml
pages:
  default:
    xsl/rss:
      published: true
```

:::
