---
title: Générer des images responsives dans les templates
description: Générer des images responsives dans les templates Cecil avec la fonction html.
path: comment-faire/templates-responsive-images
layout: responsive-images
date: 2025-07-25
updated: 2026-10-16
---
Le moyen le plus simple de générer des [images responsives](https://developer.mozilla.org/fr/docs/Web/HTML/Guides/Responsive_images) dans les templates est d’utiliser la [fonction `html`](/fr/documentation/templates/reference/fonctions/#html) :

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Description alternative'}, options={responsive: true}) }}
```

:::important
Les valeurs de largeur par défaut des images générées sont 480, 640, 768, 1024, 1366, 1600 et 1920. Elles peuvent être modifiées dans la section _assets_ de la [configuration](/fr/documentation/configuration/assets/#assets-images).
:::

:::tip
Les images responsives peuvent être activées pour toutes les images générées avec `html` grâce à l’[option `layouts.images.responsive`](/fr/documentation/configuration/layouts/#layouts-images). Utilisez `responsive: 'density'` pour générer des variantes selon la densité de pixels (`1x`, `2x`, etc.) plutôt que selon la largeur.
:::

## Exemple

Voici un exemple avec une image PNG de 1000×1000 pixels :

```twig
{{ html(asset('cecil-logo-1000.png'), attributes={alt: 'Cecil logo'}, options={responsive: true}) }}
```

### Configuration

```yaml
assets:
  images:
    responsive:
      widths: [768, 1024]
```

### HTML généré

Reformaté pour plus de lisibilité :

```html
<img
  src="/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png"
  alt="Cecil logo"
  srcset="/thumbnails/768/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 768w,
          /cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 1000w"
  sizes="100vw"
  width="1000"
  height="1000"
>
```
