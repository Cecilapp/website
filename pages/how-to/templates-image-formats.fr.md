---
title: Générer plusieurs formats d’image dans les templates
description: Générer des formats d’image AVIF et WebP dans les templates Cecil.
path: comment-faire/templates-image-formats
layout: image-formats
date: 2025-07-25
updated: 2026-10-16
---
Pour optimiser les performances et la bande passante, Cecil peut générer plusieurs formats d’une image, tels qu’AVIF et WebP. Cela permet au navigateur de sélectionner le format le plus adapté à ses capacités :

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Description alternative'}, options={formats: ['avif', 'webp']}) }}
```

AVIF et WebP sont des formats d’image qui offrent une meilleure compression que JPEG et PNG à qualité égale : les images se chargent plus vite et consomment moins de données. Ils sont pris en charge par tous les navigateurs modernes (Chrome, Edge, Firefox, Safari et Opera) ; l’image d’origine est conservée comme solution de repli pour les plus anciens.

:::tip
Les formats alternatifs peuvent être activés pour toutes les images générées avec `html` grâce à l’[option `layouts.images.formats`](/fr/documentation/configuration/layouts/#layouts-images).
:::

## Exemple

Voici un exemple de génération des formats AVIF et WebP d’une image :

```twig
{{ html(asset('cecil-logo.png'), attributes={alt: 'Cecil logo'}, options={formats: ['avif', 'webp']}) }}
```

### HTML généré

```html
<picture>
  <source type="image/avif" srcset="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.avif">
  <source type="image/webp" srcset="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.webp">
  <img src="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.png" alt="Cecil logo" width="250" height="250">
</picture>
```

:::info
Consultez la documentation de la [fonction `html`](/fr/documentation/templates/reference/fonctions/#html).
:::
