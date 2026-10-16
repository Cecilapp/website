---
title: Organize pages with tags and categories
description: Classify Cecil pages with taxonomies like tags and categories, and customize their list pages.
date: 2026-10-10
schedule:
  publish: 2026-10-10
---
Taxonomies let you classify pages with terms (e.g. `PHP`) grouped in vocabularies (e.g. `tags`). Cecil then generates a page per vocabulary and a page per term.

## Declare vocabularies

Vocabularies are declared in `cecil.yml`, paired by plural and singular names:

```yaml
taxonomies:
  categories: category
  tags: tag
```

:::warning
There are no default vocabularies: you must declare them to use them.
:::

## Classify pages

Add terms in the front matter of your pages, using the plural name of the vocabulary:

```yaml
---
title: My first post
categories: ["Development"]
tags: ["PHP", "Static site"]
---
```

Cecil generates:

- `/tags/`: the list of the terms of the vocabulary
- `/tags/php/` and `/tags/static-site/`: the list of the pages of each term

## Customize the list of terms

The _vocabulary_ template is named after the **plural**, e.g. `layouts/taxonomy/tags.html.twig`:

```twig
{% extends 'page.html.twig' %}

{% block content %}
  <h1>{{ page.title }}</h1>
  <ul>
  {% for term in page.terms %}
    <li><a href="{{ url(term.id) }}">{{ term.name }}</a> ({{ term|length }})</li>
  {% endfor %}
  </ul>
{% endblock %}
```

## Customize the pages of a term

The _term_ template is named after the **singular**, e.g. `layouts/taxonomy/tag.html.twig`:

```twig
{% extends 'page.html.twig' %}

{% block content %}
  <h1>{{ page.title }}</h1>
  {% for p in page.paginator.pages ?? page.pages %}
    <article>
      <h2><a href="{{ url(p) }}">{{ p.title }}</a></h2>
    </article>
  {% endfor %}
  <a href="{{ url(page.plural) }}">All {{ page.plural }}</a>
{% endblock %}
```

## Display the terms of a page

In a page template, link each term to its page:

```twig
{% for tag in page.tags ?? [] %}
  <a href="{{ url('tags/' ~ tag) }}">{{ tag }}</a>
{% endfor %}
```

Or use the built-in partial: `{{ include('partials/terms-list.html.twig', {vocabulary: 'tags'}) }}`.

:::info
See the documentation of [taxonomies configuration](/documentation/configuration/#taxonomies), [templates lookup rules](/documentation/templates/#type-vocabulary) and [taxonomy variables](/documentation/templates/#page).
:::
