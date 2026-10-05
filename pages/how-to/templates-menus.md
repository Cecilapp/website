---
title: Build a navigation menu
description: Declare menus in Cecil configuration or front matter and render them in templates.
date: 2026-10-09
schedule:
  publish: 2026-10-09
---
Cecil manages navigation menus as collections of entries (name, URL, weight) that you can declare in the configuration or directly in pages, then render anywhere in your templates.

## Declare entries in configuration

Add a `menus` section in `cecil.yml`. Each menu (e.g.: `main`, `footer`) is a list of entries with a unique `id`:

```yaml
menus:
  main:
    - id: about
      name: "About"
      url: /about/
      weight: 1
  footer:
    - id: github
      name: "GitHub"
      url: https://github.com/Cecilapp/Cecil
      weight: 99
```

:::info
A `main` menu is automatically created with the home page entry and all sections entries.
:::

## Add a page from its front matter

A page can add itself to one or more menus with the `menu` variable. The entry name is the page `title` and the URL is the page path:

```yaml
---
title: Our Expertise
menu:
  main:
    weight: 15
  footer:
    weight: 15
    name: "Expertise" # override the entry name in this menu
---
```

## Override or disable an entry

Use the page ID as `id` to override an existing entry, or `enabled: false` to remove it:

```yaml
menus:
  main:
    - id: index
      name: "Home"
      weight: 1
    - id: about
      enabled: false
```

## Render the menu

Loop over `site.menus.<menu>`, sorted by weight, and compare each entry ID with the current page ID to highlight the active item:

```twig
<nav>
  <ul>
  {% for entry in site.menus.main|sort_by_weight %}
    <li>
      <a href="{{ url(entry.url) }}"{% if entry.id == page.id %} aria-current="page" class="active"{% endif %}>{{ entry.name }}</a>
    </li>
  {% endfor %}
  </ul>
</nav>
```

A single entry can also be reached by its ID:

```twig
{% if site.menus.main.about is defined %}
  <a href="{{ url(site.menus.main.about.url) }}">{{ site.menus.main.about.name }}</a>
{% endif %}
```

:::tip
Cecil also provides a built-in partial: `{{ include('partials/navigation.html.twig', {menu: 'main'}) }}`.
:::

:::info
See the documentation of the [menus configuration](/documentation/configuration/#menus), the [`menu` front matter variable](/documentation/content/#menu) and the [`site.menus` variable](/documentation/templates/#site).
:::
