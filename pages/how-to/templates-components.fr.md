---
title: Utiliser les composants Twig
description: Créer des unités de template réutilisables avec les composants Cecil et la balise x.
path: comment-faire/templates-composants
date: 2026-10-18
schedule:
  publish: 2026-10-18
---
Les composants sont de petits templates Twig réutilisables (bouton, carte, alerte, etc.) que l’on appelle avec une balise dédiée, auxquels on passe des attributs et qui peuvent envelopper n’importe quel contenu.

## Créer un composant

Les composants sont des templates Twig stockés dans le sous-répertoire `components/` du répertoire des layouts. Créez `layouts/components/button.twig` :

```twig
<button {{ attributes.merge({class: 'rounded px-4'}) }}>
  {{ slot }}
</button>
```

- `slot` contient le contenu ajouté entre les balises d’ouverture et de fermeture
- `attributes` contient les attributs passés au composant, et `merge()` les combine avec des valeurs par défaut

## Utiliser le composant

Appelez le composant avec la balise `x` suivie de `:` et du nom de fichier du composant, sans extension :

```twig
{% x:button with {class: 'text-white'} %}
  <strong>Click me</strong>
{% endx %}
```

Rendu :

```html
<button class="text-white rounded px-4">
  <strong>Click me</strong>
</button>
```

## Passer des variables

Les valeurs passées avec `with` sont aussi disponibles comme variables dans le composant. Par exemple, `layouts/components/card.twig` :

```twig
<article class="card">
  <h2><a href="{{ href }}">{{ title }}</a></h2>
  {{ slot }}
</article>
```

Utilisez-le dans un template de liste :

```twig
{% for p in page.pages.showable %}
  {% x:card with {href: url(p), title: p.title} %}
    <p>{{ p.description }}</p>
  {% endx %}
{% endfor %}
```

## Changer le répertoire des composants

Le répertoire et l’extension des fichiers de composants peuvent être modifiés dans `cecil.yml` :

```yaml
layouts:
  components:
    dir: components # répertoire source des composants
    ext: twig       # extension des fichiers de composants
```

:::info
Consultez la documentation des [composants](/documentation/templates/#components) et de la [configuration des composants](/documentation/configuration/#layouts-components). La fonctionnalité est fournie par l’[extension Twig components](https://github.com/giorgiopogliani/twig-components).
:::
