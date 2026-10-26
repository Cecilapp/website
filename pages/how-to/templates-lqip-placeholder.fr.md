---
title: Afficher un aperçu des images pendant leur chargement
description: Afficher une couleur dominante ou un aperçu flouté pendant le chargement des images dans les templates Cecil.
path: comment-faire/templates-placeholder-lqip
date: 2026-10-15
updated: 2026-10-18
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

:::important
L’option `placeholder` de la fonction `html` ne s’applique qu’aux images JPEG, PNG et GIF, et le _placeholder_ `lqip` est ignoré pour les GIF animés.
:::

## Avec les filtres

Pour un balisage personnalisé, utilisez directement les filtres :

- `lqip` : renvoie une version minuscule et floutée de l’image sous forme de _data URL_
- `dominant_color` : renvoie la couleur dominante de l’image sous forme de valeur de couleur CSS (par exemple `rgb(120 85 60)`)

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

:::tip
Les images en Markdown prennent aussi en charge les _placeholders_ : `![](/images/photo.jpg){placeholder=lqip}`, ou globalement avec l’[option `pages.body.images.placeholder`](/fr/documentation/configuration/pages/#pages-body-images).
:::

:::info
Consultez la documentation du [filtre `lqip`](/fr/documentation/assets/images/#lqip), du [filtre `dominant_color`](/fr/documentation/assets/images/#dominant-color) et de la [fonction `html`](/fr/documentation/templates/reference/fonctions/#html).
:::
