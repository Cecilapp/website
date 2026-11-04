---
title: Speed up builds with fragments cache
description: Cache parts of Cecil templates to avoid rendering the same content for every page.
date: 2026-10-20
schedule:
  publish: 2026-10-20
---
Some parts of a layout (footer, sidebar, list of latest posts, etc.) are identical on every page but are rendered again for each of them. With the _fragments_ cache, Cecil renders such a part once per build and language, then reuses the result for the other pages.

## Wrap content with the cache tag

Surround the cacheable part of a template with the [`cache` tag](https://twig.symfony.com/doc/tags/cache.html) and a key built with the `cache_key` function:

```twig
{% cache cache_key('footer') %}
  <footer>
    {% for entry in site.menus.footer|sort_by_weight %}
      <a href="{{ url(entry.url) }}">{{ entry.name }}</a>
    {% endfor %}
  </footer>
{% endcache %}
```

## Build the cache key

The `cache_key` function builds a key from a name, an optional value, the current language and the build ID:

```twig
{% cache cache_key('sidebar', page.section) %}
  {# cacheable content #}
{% endcache %}
```

- the language ensures that each language gets its own fragment
- the build ID changes on every build, so a fragment is rendered once per build and never reused by a later build
- the optional value (string, array or object) is hashed and added to the key, to keep several variants of the same fragment, for example one per section

:::warning
_Fragments_ cache is stored on disk and has no expiration. With a fixed key such as `{% cache 'footer' %}`, the fragment is shared by every language and reused by the next builds, so pages can display outdated or wrong-language content until the cache is cleared. Always use `cache_key`.
:::

## Example: latest posts sidebar

The list below is rendered once per build and language, then reused by every page that includes it:

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
Do not cache content that depends on the current page (e.g. active menu item, page title), or include a page value (like `page.id`) in the key.
:::

## Clear the cache

Clear only the fragments cache:

```bash
php cecil.phar cache:clear:templates --fragments
```

Or clear the whole templates cache, or all caches:

```bash
php cecil.phar cache:clear:templates
php cecil.phar cache:clear
```

During local development, you can also clear the cache before each build:

```bash
php cecil.phar serve --clear-cache
```

:::info
See the documentation of [fragments cache](/documentation/templates/cache/#fragments-cache), the [`cache_key` function](/documentation/templates/reference/functions/#cache-key) and the [cache configuration](/documentation/configuration/cache/).
:::
