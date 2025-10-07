---
title: Comment rendre des images réactives dans des modèles ?
path: comment-faire/templates-responsive-images
layout: responsive-images
date: 2025-07-25
---
La manière la plus simple de rendre des [images réactives](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) dans des modèles est d'utiliser la [fonction html](/documentation/templates/#html) :

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Description alternative'}, options={responsive: true}) }}
```

:::important
Les valeurs de largeur par défaut des images générées sont 480, 640, 768, 1024, 1366, 1600 et 1920. Elles peuvent être modifiées dans la section _assets_ de la [configuration](/documentation/configuration/#assets-images).
:::

## Exemple

Ci-dessous un exemple avec une image PNG 1000x1000 pixels.

```twig
{{ html(asset('images/cecil-logo-1000.png'), attributes={alt: 'Cecil logo'}, options={responsive: true}) }}
```

### Configuration

```yaml
assets:
  images:
    responsive:
      widths: [768, 1024]
```

### HTML généré

```html
<img
  alt="Cecil logo"
  width="1000"
  height="1000"
  src="/images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png"
  srcset="/thumbnails/768/images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 768w,
          /images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 1000w"
  sizes="100vw"
>
```
