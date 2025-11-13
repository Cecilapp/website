---
title: Comment optimiser les images dans Markdown ?
path: comment-faire/markdown-performance-images
date: 2025-07-25
---
L'optimisation des images est l'un des moyens les plus efficaces d'améliorer les performances de votre site web.

Cecil gère automatiquement les optimisations suivantes pour les images Markdown :

1. **Dimensions** : Les dimensions des images sont définies pour garantir une mise en page correcte et éviter les décalages.
2. **Compression** : L'image est compressée pour réduire la taille du fichier sans perte significative de qualité.
3. **Formats d'image** : Cecil génère les formats AVIF et WebP pour l'image.
4. **Images responsives** : Cecil génère deux tailles d'image différentes (selon la configuration) pour s'adapter à la taille des différents appareils.
5. **Chargement différé** : L'image est configurée pour se charger différément, c'est-à-dire uniquement lorsqu'elle apparaît dans la fenêtre d'affichage.
6. **Décodage** : Le décodage de l'image est configuré pour être asynchrone, ce qui améliore le temps de chargement initial de la page.
7. **Espace réservé** : Un espace réservé de couleur est utilisé pendant le chargement de l'image.

:::info

Consultez la documentation pour plus de détails sur la [configuration des ressources globales](/documentation/configuration/#assets-images) et la [configuration des pages](/documentation/configuration/#pages-body-images).

:::

## Exemple

Ci-dessous un exemple avec une image PNG 1920x1276 pixels.

```twig
![Une région de formation d’étoiles dans le ciel](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg "Photo de Arnaud Girault"){placeholder=color}
```

![Une région de formation d’étoiles dans le ciel](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg "Photo de [Arnaud Girault](https://unsplash.com/fr/photos/une-region-de-formation-detoiles-dans-le-ciel-IjEtFjxXweE)"){placeholder=color}

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
<picture>
  <source
    type="image/avif"
    srcset="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.avif 1024w,
            /thumbnails/768/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.avif 768w"
    sizes="100vw"
    width="1024"
    height="681"
  >
  <source
    type="image/webp"
    srcset="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.webp 1024w,
            /thumbnails/768/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.webp 768w"
    sizes="100vw"
    width="1024"
    height="681"
  >
  <img src="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.jpg"
    alt="Photo de Arnaud Girault"
    loading="lazy"
    decoding="async"
    width="1024"
    height="681"
    style=";max-width:100%;height:auto;background-color:rgb(58, 56, 44);"
    srcset="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.jpg 1024w,
            /thumbnails/768/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.jpg 768w"
    sizes="100vw"
  >
</picture>
```
