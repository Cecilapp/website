---
title: Comment générer plusieurs formats d'images dans des modèles ?
path: comment-faire/templates-image-formats
layout: image-formats
date: 2025-07-25
---
Pour optimiser les performances et la bande passante, Cecil peut générer plusieurs formats d'image, tels qu'AVIF et WebP. Cela permet au navigateur de sélectionner le format le plus adapté à ses capacités :

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Description alternative'}, options={formats: ['avif', 'webp']}) }}
```

> AVIF et WebP sont des formats d'image offrant des caractéristiques de compression et de qualité supérieures à leurs homologues JPEG et PNG plus anciens. Encoder vos images dans ces formats plutôt que JPEG ou PNG permet un chargement plus rapide et une consommation de données mobiles réduite.
>
> AVIF est pris en charge par Chrome, Firefox et Opera et offre des tailles de fichier plus petites que d'autres formats à qualité égale.
>
> WebP est pris en charge par les dernières versions de Chrome, Firefox, Safari, Edge et Opera et offre une meilleure compression avec et sans perte pour les images sur le Web.

– [Documentation Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images?hl=fr)

## Exemple

Ci-dessous un exemple de génération des formats AVIF et WebP d'une image :

```twig
{{ html(asset('cecil-logo.png'), attributes={alt: 'Cecil logo'}, options={formats: ['avif', 'webp']}) }}
```

### HTML généré

```html
<picture>
  <source type="image/avif" srcset="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.avif">
  <source type="image/webp" srcset="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.webp">
  <img src="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.png" width="250" height="250" alt="Cecil logo">
</picture>
```
