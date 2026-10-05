---
title: Speed up builds with fragment cache
description: Cache parts of Cecil templates to avoid rendering the same content for every page.
date: 2026-10-20
schedule:
  publish: 2026-10-20
---
Some parts of a layout (footer, sidebar, list of latest posts, etc.) are identical on every page but are rendered again for each of them. With the _fragments_ cache, Cecil renders such a part once and reuses the result.

## Wrap content with the cache tag

Surround the cacheable part of a template with the [`cache` tag](https://twig.symfony.com/doc/tags/cache.html) and a key:

```twig
{% cache 'footer' %}
  <footer>
    {% for entry in site.menus.footer|sort_by_weight %}
      <a href="{{ url(entry.url) }}">{{ entry.name }}</a>
    {% endfor %}
  </footer>
{% endcache %}
```

## Generate a unique key

_Fragments_ cache is persistent: with a too generic key, a page could display the wrong content. Use the `cache_key` function to build a key from a name and a value:

```twig
{% cache cache_key('footer', site.menus.footer) %}
  {# cacheable content #}
{% endcache %}
```

The function adds a hash of the value (string, array or object), the current language and the build ID to the name: when the value changes, the key changes too and the fragment is rendered again.

## Example: latest posts sidebar

The list below is rendered once, then reused by every page that includes it:

```twig
{% cache cache_key('latest-posts') %}
  <aside>
    <h2>Latest posts</h2>
    <ul>
    {% for post in site.pages.showable|filter_by('section', 'blog')|sort_by_date|slice(0, 5) %}
      <li><a href="{{ url(post) }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </aside>
{% endcache %}
```

:::warning
Do not cache content that depends on the current page (e.g.: active menu item, page title), or include a page value (like `page.id`) in the key.
:::

## Clear the cache

Clear fragments cache only:

```bash
php cecil.phar cache:clear:templates --fragments
```

Or clear all templates cache, or all caches:

```bash
php cecil.phar cache:clear:templates
php cecil.phar cache:clear
```

During local development, you can also clear the cache before each build:

```bash
php cecil.phar serve --clear-cache
```

:::info
See the documentation of [fragments cache](/documentation/templates/#fragments-cache), the [`cache_key` function](/documentation/templates/#cache-key) and the [cache configuration](/documentation/configuration/#cache).
:::
