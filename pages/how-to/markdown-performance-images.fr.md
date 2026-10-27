---
title: Optimiser les images dans Markdown
description: Optimiser les images Markdown dans Cecil avec des tailles adaptatives, des formats modernes et le chargement différé.
path: comment-faire/markdown-performance-images
date: 2025-06-01
updated: 2026-10-16
---
L’optimisation des images est l’un des moyens les plus efficaces d’améliorer les performances de votre site web.

Cecil peut appliquer automatiquement les optimisations suivantes aux images Markdown (voir la configuration ci-dessous) :

1. **Dimensions** : les dimensions des images sont définies pour garantir une mise en page correcte et éviter les décalages
2. **Compression** : l’image est compressée pour réduire la taille du fichier sans perte significative de qualité (nécessite `assets.images.optimize: true` et l’installation des outils d’optimisation, comme JpegOptim ou Optipng)
3. **Formats d’image** : Cecil génère les formats AVIF et WebP de l’image
4. **Images adaptatives (_responsive_)** : Cecil génère deux tailles d’image différentes (selon la configuration) pour servir la taille adaptée à chaque appareil
5. **Chargement différé** : l’image est configurée pour se charger de manière différée, c’est-à-dire uniquement lorsqu’elle apparaît dans la fenêtre d’affichage
6. **Décodage** : le décodage de l’image est configuré pour être asynchrone, ce qui améliore le temps de chargement initial de la page
7. **Espace réservé** : un espace réservé de couleur est affiché pendant le chargement de l’image

:::info
Consultez la documentation pour plus de détails sur la [configuration globale des assets](/fr/documentation/configuration/assets/#assets-images) et la [configuration des pages](/fr/documentation/configuration/pages/#pages-body).
:::

## Exemple

Voici un exemple avec une image JPEG de 1920 × 1276 pixels.

```markdown
![Une région de formation d’étoiles dans le ciel](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg "Photo d’Arnaud Girault"){placeholder=color}
```

![Une région de formation d’étoiles dans le ciel](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg "Photo d’[Arnaud Girault](https://unsplash.com/fr/photos/une-region-de-formation-detoiles-dans-le-ciel-IjEtFjxXweE)"){placeholder=color}

### Configuration

```yaml
# configuration globale des assets
assets:
  images:
    optimize: true
    responsive:
      widths: [768, 1024]
# configuration des images dans du Markdown
pages:
  body:
    images:
      formats: [avif, webp]
      responsive: true
      lazy: true
      decoding: true
      placeholder: color
```

### HTML généré

```html
<picture title="Photo d’Arnaud Girault">
  <source
    type="image/avif"
    srcset="/thumbnails/768x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.avif 768w,
            /thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.avif 1024w"
    width="1024"
    height="681"
    sizes="100vw"
  >
  <source
    type="image/webp"
    srcset="/thumbnails/768x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.webp 768w,
            /thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.webp 1024w"
    width="1024"
    height="681"
    sizes="100vw"
  >
  <img src="/thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.jpg"
    alt="Une région de formation d’étoiles dans le ciel"
    loading="lazy"
    decoding="async"
    width="1024"
    height="681"
    style=";max-width:100%;height:auto;background-color:rgb(29 41 43);"
    srcset="/thumbnails/768x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.jpg 768w,
            /thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.jpg 1024w"
    sizes="100vw"
  >
</picture>
```
