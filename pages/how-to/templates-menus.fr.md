---
title: Construire un menu de navigation
description: Déclarer des menus dans la configuration ou le front matter de Cecil et les afficher dans les templates.
path: comment-faire/templates-menus
date: 2026-10-09
schedule:
  publish: 2026-10-09
---
Cecil gère les menus de navigation comme des collections d’entrées (nom, URL, poids) que vous pouvez déclarer dans la configuration ou directement dans les pages, puis afficher n’importe où dans vos templates.

## Déclarer des entrées dans la configuration

Ajoutez une section `menus` dans `cecil.yml`. Chaque menu (ex. : `main`, `footer`) est une liste d’entrées avec un `id` unique :

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
Un menu `main` est automatiquement créé avec l’entrée de la page d’accueil et celles de toutes les sections.
:::

## Ajouter une page depuis son front matter

Une page peut s’ajouter à un ou plusieurs menus avec la variable `menu`. Le nom de l’entrée est le `title` de la page et l’URL est son chemin :

```yaml
---
title: Our Expertise
menu:
  main:
    weight: 15
  footer:
    weight: 15
    name: "Expertise" # surcharge le nom de l’entrée dans ce menu
---
```

## Surcharger ou désactiver une entrée

Utilisez l’ID de la page comme `id` pour surcharger une entrée existante, ou `enabled: false` pour la retirer :

```yaml
menus:
  main:
    - id: index
      name: "Home"
      weight: 1
    - id: about
      enabled: false
```

## Afficher le menu

Bouclez sur `site.menus.<menu>`, trié par poids, et comparez l’ID de chaque entrée avec celui de la page courante pour mettre en évidence l’élément actif :

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

Une entrée peut aussi être atteinte directement par son ID :

```twig
{% if site.menus.main.about is defined %}
  <a href="{{ url(site.menus.main.about.url) }}">{{ site.menus.main.about.name }}</a>
{% endif %}
```

:::tip
Cecil fournit également un partial intégré : `{{ include('partials/navigation.html.twig', {menu: 'main'}) }}`.
:::

:::info
Consultez la documentation de la [configuration des menus](/documentation/configuration/#menus), de la [variable de front matter `menu`](/documentation/content/#menu) et de la [variable `site.menus`](/documentation/templates/#site).
:::
