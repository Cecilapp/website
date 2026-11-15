---
title: Render responsive images in templates
description: Render responsive images in Cecil templates with the html function.
layout: responsive-images
date: 2024-01-18
updated: 2026-10-16
---
The easiest way to render [responsive images](https://developer.mozilla.org/docs/Web/HTML/Guides/Responsive_images) in templates is with the [`html` function](/documentation/templates/reference/functions/#html):

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Alternative description'}, options={responsive: true}) }}
```

:::important
The default width values of the generated images are 480, 640, 768, 1024, 1366, 1600 and 1920. They can be modified in the _assets_ section of the [configuration](/documentation/configuration/assets/#assets-images).
:::

:::tip
Responsive images can be enabled for every image rendered with `html` through the [`layouts.images.responsive` option](/documentation/configuration/layouts/#layouts-images). Use `responsive: 'density'` to generate pixel density variants (`1x`, `2x`, etc.) instead of widths.
:::

## Example

Below is an example with a 1000×1000 pixel PNG image:

```twig
{{ html(asset('cecil-logo-1000.png'), attributes={alt: 'Cecil logo'}, options={responsive: true}) }}
```

### Configuration

```yaml
assets:
  images:
    responsive:
      widths: [768, 1024]
```

### Generated HTML

Reformatted for readability:

```html
<img
  src="/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png"
  alt="Cecil logo"
  srcset="/thumbnails/768/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 768w,
          /cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 1000w"
  sizes="100vw"
  width="1000"
  height="1000"
>
```
