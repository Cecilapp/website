---
title: How to generate multiple formats of an images in templates?
layout: image-formats
date: 2025-06-01
---
# How to generate multiple formats of an images in templates?

For performance and bandwidth optimization, Cecil can generate multiple formats of an image, such as AVIF and WebP. This allows the browser to select the best format based on its capabilities:

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Alternative description'}, options={formats: ['avif', 'webp']}) }}
```

> AVIF and WebP are image formats that have superior compression and quality characteristics compared to their older JPEG and PNG counterparts. Encoding your images in these formats rather than JPEG or PNG means that they will load faster and consume less cellular data.
>
> AVIF is supported in Chrome, Firefox, and Opera and offers smaller file sizes compared to other formats with the same quality settings.
>
> WebP is supported in the latest versions of Chrome, Firefox, Safari, Edge, and Opera and provides better lossy and lossless compression for images on the web.

– [Chrome Lighthouse docs](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images)

## Example

Bellow an example of how to generate AVIF and WebP formats of an image:

```twig
{{ html(asset('images/cecil-logo.png'), attributes={alt: 'Cecil logo'}, options={formats: ['avif', 'webp']}) }}
```

### Generated HTML

```html
<picture>
  <source type="image/avif" srcset="/images/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.avif">
  <source type="image/webp" srcset="/images/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.webp">
  <img src="/images/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.png" width="250" height="250" alt="Cecil logo">
</picture>
```
