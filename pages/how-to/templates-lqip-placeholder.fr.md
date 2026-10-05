---
title: Afficher des placeholders d’images pendant le chargement
description: Afficher une couleur dominante ou un aperçu flouté pendant le chargement des images dans les templates Cecil.
path: comment-faire/templates-lqip-placeholder
date: 2026-10-15
schedule:
  publish: 2026-10-15
---
Les images sont souvent les ressources les plus lourdes d’une page. Pendant leur chargement, Cecil peut remplir leur emplacement avec une **couleur dominante** ou un **aperçu basse qualité** (LQIP, _Low-Quality Image Placeholder_), pour éviter les blocs vides et améliorer la performance perçue.

## Avec la fonction html

Le plus simple est d’utiliser l’option `placeholder` de la fonction `html`, avec la valeur `color` ou `lqip` :

```twig
{{ html(asset('images/photo.jpg'), {alt: 'Description', loading: 'lazy'}, {placeholder: 'lqip'}) }}
```

Pour l’appliquer à toutes les images générées avec `html`, définissez une valeur par défaut dans `cecil.yml` :

```yaml
layouts:
  images:
    placeholder: color # `color` ou `lqip`
```

## Avec les filtres

Pour un balisage personnalisé, utilisez directement les filtres :

- `lqip` : retourne une version 100x100 px, floutée à 50 %, de l’image sous forme de data URL
- `dominant_color` : retourne la couleur hexadécimale dominante de l’image

### Couleur dominante

```twig
{% set image = asset('images/photo.jpg') %}
<img src="{{ url(image) }}" width="{{ image.width }}" height="{{ image.height }}" alt="Description" loading="lazy"
  style="background-color: {{ image|dominant_color }};">
```

### Aperçu flouté

```twig
{% set image = asset('images/photo.jpg') %}
<img src="{{ url(image) }}" width="{{ image.width }}" height="{{ image.height }}" alt="Description" loading="lazy"
  class="placeholder" style="background-image: url({{ image|lqip }});">
```

Étirez l’aperçu sur toute la surface de l’image en CSS :

```css
img.placeholder {
  max-width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
}
```

L’arrière-plan reste visible jusqu’à ce que l’image réelle soit chargée et affichée par-dessus.

:::warning
Le placeholder `lqip` n’est pas compatible avec les GIF animés.
:::

:::tip
Les images en Markdown supportent aussi les placeholders : `![](/images/photo.jpg){placeholder=lqip}`, ou globalement avec l’[option `pages.body.images.placeholder`](/documentation/configuration/#pages-body).
:::

:::info
Consultez la documentation du [filtre `lqip`](/documentation/templates/#lqip), du [filtre `dominant_color`](/documentation/templates/#dominant-color) et de la [fonction `html`](/documentation/templates/#html).
:::
