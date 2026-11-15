---
title: Generate multiple formats of an image in templates
description: Generate AVIF and WebP image formats in Cecil templates.
layout: image-formats
date: 2025-06-01
updated: 2026-10-16
---
For performance and bandwidth optimization, Cecil can generate multiple formats of an image, such as AVIF and WebP. This allows the browser to select the best format based on its capabilities:

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Alternative description'}, options={formats: ['avif', 'webp']}) }}
```

AVIF and WebP are image formats that offer better compression than JPEG and PNG at the same quality: images load faster and consume less data. Both are supported by all modern browsers (Chrome, Edge, Firefox, Safari and Opera); the original image is kept as a fallback for older ones.

:::tip
Alternative formats can be enabled for every image rendered with `html` through the [`layouts.images.formats` option](/documentation/configuration/layouts/#layouts-images).
:::

## Example

Below is an example of how to generate AVIF and WebP formats of an image:

```twig
{{ html(asset('cecil-logo.png'), attributes={alt: 'Cecil logo'}, options={formats: ['avif', 'webp']}) }}
```

### Generated HTML

```html
<picture>
  <source type="image/avif" srcset="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.avif">
  <source type="image/webp" srcset="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.webp">
  <img src="/cecil-logo.c1af8a129a0cde81f9b94ffbf452e10b.png" alt="Cecil logo" width="250" height="250">
</picture>
```

:::info
See the documentation of the [`html` function](/documentation/templates/reference/functions/#html).
:::
