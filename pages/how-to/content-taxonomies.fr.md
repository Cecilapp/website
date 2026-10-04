---
title: Organiser les pages avec des tags et des catégories
description: Classer les pages Cecil avec des taxonomies comme les tags et les catégories, et personnaliser leurs pages de liste.
path: comment-faire/content-taxonomies
date: 2026-10-10
schedule:
  publish: 2026-10-10
---
Les taxonomies permettent de classer les pages avec des termes (ex. `PHP`) regroupés dans des vocabulaires (ex. `tags`). Cecil génère ensuite une page par vocabulaire et une page par terme.

## Déclarer les vocabulaires

Les vocabulaires sont déclarés dans `cecil.yml`, par paires de noms au pluriel et au singulier :

```yaml
taxonomies:
  categories: category
  tags: tag
```

:::warning
Il n’existe pas de vocabulaire par défaut : vous devez les déclarer pour les utiliser.
:::

## Classer les pages

Ajoutez les termes dans le front matter de vos pages, en utilisant le nom au pluriel du vocabulaire :

```yaml
---
title: Mon premier billet
categories: ["Development"]
tags: ["PHP", "Static site"]
---
```

Cecil génère :

- `/tags/` : la liste des termes du vocabulaire
- `/tags/php/` et `/tags/static-site/` : la liste des pages de chaque terme

## Personnaliser la liste des termes

Le template de _vocabulaire_ est nommé d’après le **pluriel**, ex. `layouts/taxonomy/tags.html.twig` :

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

## Personnaliser les pages d’un terme

Le template de _terme_ est nommé d’après le **singulier**, ex. `layouts/taxonomy/tag.html.twig` :

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

## Afficher les termes d’une page

Dans un template de page, liez chaque terme à sa page :

```twig
{% for tag in page.tags ?? [] %}
  <a href="{{ url('tags/' ~ tag) }}">{{ tag }}</a>
{% endfor %}
```

Ou utilisez le partial intégré : `{{ include('partials/terms-list.html.twig', {vocabulary: 'tags'}) }}`.

:::info
Consultez la documentation de la [configuration des taxonomies](/documentation/configuration/#taxonomies), des [règles de sélection des templates](/documentation/templates/#type-vocabulary) et des [variables de taxonomie](/documentation/templates/#page).
:::
