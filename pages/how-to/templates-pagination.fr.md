---
title: Paginer une liste de pages
description: Découper les longues listes de pages (blog, sections, taxonomies) en plusieurs pages avec la pagination de Cecil.
path: comment-faire/templates-pagination
date: 2026-10-05
schedule:
  publish: 2026-10-05
---
Lorsqu’une section contient de nombreuses pages, Cecil peut découper sa liste en plusieurs pages (ex. : `/blog/`, `/blog/page/2/`, `/blog/page/3/`, etc.) et fournit un _paginator_ pour construire les liens de navigation.

## Configurer la pagination

La pagination est activée par défaut pour les pages de liste (_homepage_, _section_ et _term_), avec 5 entrées par page. Modifiez-la dans `cecil.yml` :

```yaml
pages:
  pagination:
    max: 10    # nombre maximum d’entrées par page
    path: page # chemin des pages paginées
```

## La surcharger pour une section

Définissez la variable `pagination` dans le front matter du fichier index de la section (ex. : `pages/blog/index.md`) :

```yaml
---
title: Blog
pagination:
  max: 20
---
```

Ou désactivez-la pour cette section uniquement :

```yaml
---
pagination: false
---
```

## Afficher les pages paginées

Dans le template de liste (ex. : `layouts/blog/list.html.twig`), bouclez sur `page.paginator.pages` et utilisez `page.pages` lorsque la pagination est désactivée :

```twig
{% for p in page.paginator.pages ?? page.pages %}
  <article>
    <h2><a href="{{ url(p) }}">{{ p.title }}</a></h2>
    <time datetime="{{ p.date|date('c') }}">{{ p.date|date('j M Y') }}</time>
  </article>
{% endfor %}
```

## Ajouter les liens de navigation

Les liens du paginator sont des identifiants de pages : utilisez la fonction `url()` pour créer des liens fonctionnels :

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

Pour lister tous les numéros de page, itérez de `1` à `page.paginator.count` :

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
Consultez la documentation de la [variable `page.paginator`](/documentation/templates/#page), de la [configuration de la pagination](/documentation/configuration/#pages-pagination) et de la [variable `pagination` des sections](/documentation/content/#section).
:::
