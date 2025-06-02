---
title: How to optimize images in Markdown?
date: 2025-06-01
---
One of the most effective ways to improve the performance of your website is to optimize images.

Cecil can manages the following optimizations for images in Markdown:

1. **Dimensions**: Images dimensions are set to ensure proper layout and prevent layout shifts
2. **Compression**: The image is compressed to reduce file size without significant loss of quality
3. **Image formats**: Cecil generates AVIF and WebP formats for the image
4. **Responsive images**: Cecil generates two different sizes of the image (based on the configuration) to serve the appropriate size for different devices
5. **Lazy loading**: The image is set to load lazily, meaning it will only load when it comes into the viewport
6. **Decoding**: The image is set to decode asynchronously, improving the initial page load time
7. **Placeholder**: A color placeholder is used while the image is loading

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
    optimize: true
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
