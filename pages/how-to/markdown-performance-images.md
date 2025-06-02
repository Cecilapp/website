---
title: How to optimize images in Markdown?
date: 2025-06-01
---
One of the most effective ways to improve the performance of your website is to optimize images.

Cecil provides several methods to help you achieve this, including lazy loading, resizing, generating multiple formats, generating responsive images and placeholder.

## Example

Bellow an example with a PNG image 1920x1276 pixels.

```twig
![Photo by Arnaud Girault](/images/arnaud-girault-IjEtFjxXweE-unsplash.jpg)
```

![Photo by Arnaud Girault](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg){placeholder=color}

### Configuration

```yaml
pages:
  body:
    images:
      formats: [avif, webp]
      responsive: true
      lazy: true
      decoding: true
      placeholder: color
assets:
  images:
    responsive:
      widths: [768, 1024]
```

### Generated HTML

```html
<picture>
  <source
    type="image/avif"
    srcset="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.avif 1024w, /thumbnails/768/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.avif 768w"
    sizes="100vw"
    width="1024"
    height="681"
  >
  <source
    type="image/webp"
    srcset="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.webp 1024w, /thumbnails/768/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.webp 768w"
    sizes="100vw"
    width="1024"
    height="681"
  >
  <img src="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.jpg"
    alt="Photo by Arnaud Girault"
    loading="lazy"
    decoding="async"
    width="1024"
    height="681"
    style=";max-width:100%;height:auto;background-color:rgb(58, 56, 44);"
    srcset="/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.jpg 1024w, /thumbnails/768/thumbnails/1024/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.c0bdd31264ac3d0d364d02bced31038f.jpg 768w"
    sizes="100vw"
  >
</picture>
```
