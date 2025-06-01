---
title: How to optimize Markdown images for performance?
date: 2025-06-01
---
One of the most effective ways to improve the performance of your website is to optimize images.

Cecil provides several methods to help you achieve this, including lazy loading, resizing, generating multiple formats, generating responsive images and placeholder.

## Example

Bellow an example with a PNG image 2272x1760 pixels.

```twig
![Photo Stream screenshot](/images/photo-stream.png)
```

![Photo Stream screenshot](../../assets/images/photo-stream.png){placeholder=color}

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
    srcset="/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.avif 1024w, /thumbnails/768/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.avif 768w"
    sizes="100vw"
    width="1024"
    height="793"
  >
  <source
    type="image/webp"
    srcset="/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.webp 1024w, /thumbnails/768/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.webp 768w"
    sizes="100vw"
    width="1024"
    height="793"
  >
  <img
    src="/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.png"
    alt="Photo Stream screenshot"
    loading="lazy"
    decoding="async"
    width="1024"
    height="793"
    style=";max-width:100%;height:auto;background-color:rgba(255, 255, 255, 0.0);"
    srcset="/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.png 1024w, /thumbnails/768/thumbnails/1024/images/photo-stream.2ac467efc00ba19217fb82398d1b2f16.png 768w"
    sizes="100vw"
  >
</picture>
```
